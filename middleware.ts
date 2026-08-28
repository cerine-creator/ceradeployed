import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiter for the contact API
// Limits each IP to a max number of requests per time window
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // 5 requests per minute per IP

const ipRequestMap = new Map<string, { count: number; resetTime: number }>();

// Clean up expired entries periodically
function cleanupExpiredEntries() {
  const now = Date.now();
  for (const [ip, data] of ipRequestMap.entries()) {
    if (now > data.resetTime) {
      ipRequestMap.delete(ip);
    }
  }
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequestMap.get(ip);

  if (!entry || now > entry.resetTime) {
    // New window
    ipRequestMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  if (entry.count > MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  return false;
}

export function middleware(request: NextRequest) {
  // Only rate-limit the contact API endpoint
  if (request.nextUrl.pathname.startsWith('/api/contact')) {
    // Clean up old entries every request (lightweight for low-traffic sites)
    cleanupExpiredEntries();

    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Trop de requêtes. Veuillez réessayer dans une minute.',
        },
        { status: 429 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
