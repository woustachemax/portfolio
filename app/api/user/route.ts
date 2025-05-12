
// import { NextResponse } from 'next/server'
// import nodemailer from 'nodemailer'

// export async function POST(request: Request) {
//   try {
//     const { name, email, message, toEmail } = await request.json()

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER, 
//         pass: process.env.EMAIL_PASSWORD, 
//       },
//     })

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: toEmail,
//       subject: `New Contact Form Message from ${name}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
        
//         Message:
//         ${message}
//       `,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #6B46C1;">New Contact Form Submission</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <div style="margin-top: 20px; padding: 15px; background-color: #f7f7f7; border-radius: 5px;">
//             <p><strong>Message:</strong></p>
//             <p>${message.replace(/\n/g, '<br>')}</p>
//           </div>
//         </div>
//       `,
//     }

//     await transporter.sendMail(mailOptions)

//     return NextResponse.json({ success: true })
//   } catch (error) {
//     console.error('Error sending email:', error)
//     return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
//   }
// }