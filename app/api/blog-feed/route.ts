import { NextResponse } from 'next/server'

export const revalidate = 3600 

export async function GET() {
  try {
    const res = await fetch('https://blog.siddharththakkar.xyz/api/portfolio', {
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      console.error('Blog API fetch failed:', res.status, res.statusText)
      return NextResponse.json([], { status: 200 })
    }

    const data = await res.json()
    const posts = Array.isArray(data.blogPosts) ? data.blogPosts : []

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching blog feed:', error)
    return NextResponse.json([], { status: 200 })
  }
}
