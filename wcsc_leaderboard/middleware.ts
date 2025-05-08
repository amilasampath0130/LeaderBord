// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const { pathname } = request.nextUrl

  // Protected routes
  const protectedRoutes = ['/dashboard', '/profile','/leaderboard', 'forDevelopers'] // Add your protected routes

  // If trying to access protected route without auth
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      const url = new URL('/login', request.url)
      url.searchParams.set('callbackUrl', pathname)
      return NextResponse.redirect(url)
    }
  }

  // If logged in but trying to access auth pages
  const authRoutes = ['/login', '/register']
  if (authRoutes.includes(pathname)) {
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  return NextResponse.next()
}