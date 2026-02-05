import { NextRequest, NextResponse } from 'next/server';
import { lookup } from 'dns/promises';

export async function GET(request: NextRequest) {
  const domain = request.nextUrl.searchParams.get('domain');

  if (!domain) {
    return NextResponse.json({ valid: false }, { status: 400 });
  }

  try {
    await lookup(domain);
    return NextResponse.json({ valid: true });
  } catch {
    return NextResponse.json({ valid: false });
  }
}
