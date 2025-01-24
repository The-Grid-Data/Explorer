import { NextRequest, NextResponse } from 'next/server';
import { checkAuth } from './lib/auth/auth';

export const config = {
  matcher: ['/admin/:path*'] // Apply to all routes under /admin
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  if (basicAuth) {
    if (checkAuth(basicAuth)) {
      return NextResponse.next();
    }
  }

  url.pathname = '/api/admin-auth';
  return NextResponse.rewrite(url);
}
