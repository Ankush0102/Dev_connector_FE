// /middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/; // allow static files like images, css, etc.

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public files and next internals
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // Allow login and register routes without authentication
  if (pathname === "/login" || pathname === "/register") {
    return NextResponse.next();
  }

  // Check if cookie named 'token' exists
  const token = request.cookies.get("token")?.value;

  // If no token and route is protected, redirect to login
  if (!token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Otherwise, continue
  return NextResponse.next();
}

// Apply middleware for all routes
export const config = {
  matcher: ["/((?!login|register|_next|api).*)"], 
};
