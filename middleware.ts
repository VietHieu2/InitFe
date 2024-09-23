import { NextRequest, NextResponse } from 'next/server';
import { checkTokenExpiration } from './utils/checkTokenExpiration';
import { pathnameUrl } from './constants/pathname';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath =
    path === pathnameUrl.LOGIN ||
    path === pathnameUrl.LOGOUT ||
    path === pathnameUrl.CALLBACK ||
    path === pathnameUrl.ERROR;

  const isAdminPath = path === pathnameUrl.ADMIN;
  try {
    const accessToken = request.cookies.get('accessToken')?.value;
    const refreshToken = request.cookies.get('refreshToken')?.value;

    let isSignIned = false;
    if (accessToken) {
      const validToken = await checkTokenExpiration(accessToken, refreshToken!);

      if (!validToken) {
        isSignIned = false;
        if (!isPublicPath) {
          return NextResponse.redirect(
            new URL(pathnameUrl.LOGOUT, request.nextUrl),
          );
        }
      } else {
        isSignIned = true;
      }
    }

    if (
      isPublicPath &&
      isSignIned &&
      path !== pathnameUrl.LOGOUT &&
      path !== pathnameUrl.ERROR
    ) {
      return NextResponse.redirect(new URL(pathnameUrl.HOME, request.nextUrl));
    }

    if (isPublicPath) {
      return NextResponse.next();
    }

    if (!isPublicPath && isAdminPath) {
    }
    if (!isSignIned) {
      return NextResponse.redirect(new URL(pathnameUrl.LOGIN, request.nextUrl));
    }
    if (
      isSignIned &&
      (path === pathnameUrl.LOGIN || path === pathnameUrl.CALLBACK)
    ) {
      return NextResponse.redirect(new URL(pathnameUrl.HOME, request.nextUrl));
    }
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/error', request.nextUrl));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
