import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/profile', '/movies'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;


  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );

  const token = request.cookies.get('token')?.value;

  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  const authRoutes = ['/login'];
  const isAuthRoute = authRoutes.includes(pathname);
  if (token && isAuthRoute) {
    const loginUrl = new URL('/movies', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};