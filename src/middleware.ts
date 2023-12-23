import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
export async function middleware(req: NextRequest, res: NextResponse, request: Request) {
  const { pathname } = req.nextUrl

  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (session && pathname === '/login') {
    return NextResponse.redirect('https://nfthub-mu.vercel.app/my-account')
  }
  if (!session && pathname === '/my-account') {
    return NextResponse.redirect('https://nfthub-mu.vercel.app/login')
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/login', '/my-account']
}
