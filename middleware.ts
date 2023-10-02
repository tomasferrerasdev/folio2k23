import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/',
};

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req;
  const country = geo?.country || '???';
  const city = geo?.city || '???';

  url.searchParams.set('country', country);
  url.searchParams.set('city', city);

  return NextResponse.rewrite(url);
}
