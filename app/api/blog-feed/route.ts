import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://blog.siddharththakkar.xyz/rss.xml', {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
      cache: 'no-store',
    })

    if (!response.ok) {
      console.error('RSS fetch failed:', response.status, response.statusText)
      return NextResponse.json([], { status: 200 })
    }

    const text = await response.text()
    const items = text.match(/<item>[\s\S]*?<\/item>/g) || []
    
    const posts = items.slice(0, 3).map(item => {
      const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] || 
                    item.match(/<title>(.*?)<\/title>/)?.[1] || 'Untitled'
      
      const link = item.match(/<link>(.*?)<\/link>/)?.[1] || '#'
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || ''
      
      const description = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1] ||
                         item.match(/<description>(.*?)<\/description>/)?.[1] || ''
      
      return {
        title: title.trim(),
        link: link.trim(),
        pubDate: pubDate.trim(),
        description: description.trim().substring(0, 150) + '...'
      }
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching blog feed:', error)
    return NextResponse.json([], { status: 200 })
  }
}