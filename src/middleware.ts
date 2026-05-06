import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('zenyog_auth');
  
  // Define routes that require authentication
  const protectedRoutes = ['/workout-library', '/meal-planner', '/connect'];
  
  const isProtected = protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route));
  
  if (isProtected && !authCookie) {
    const signupUrl = new URL('/sign-up', request.url);
    return NextResponse.redirect(signupUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};
