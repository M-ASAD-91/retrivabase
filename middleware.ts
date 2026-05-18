// import type { NextRequest } from "next/server"
// import { NextResponse } from "next/server"

// const AUTH_COOKIE = "demo-auth"
// const PROTECTED_PREFIXES = ["/dashboard"]
// const PROTECTED_EXACT = ["/"]
// const AUTH_ROUTES = ["/sign-in", "/sign-up"]

// const isProtected = (pathname: string) =>
//   PROTECTED_EXACT.includes(pathname) || PROTECTED_PREFIXES.some(route => pathname.startsWith(route))

// const isAuthRoute = (pathname: string) => AUTH_ROUTES.some(route => pathname.startsWith(route))

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl
//   const sessionCookie = request.cookies.get(AUTH_COOKIE)?.value

//   // Check if session exists (supports both JSON format and legacy "true" format)
//   const hasSession = !!sessionCookie && (sessionCookie === "true" || sessionCookie.startsWith("{"))

//   // Redirect unauthenticated users from root to landing page
//   if (pathname === "/" && !hasSession) {
//     const landingUrl = request.nextUrl.clone()
//     landingUrl.pathname = "/landing"
//     return NextResponse.redirect(landingUrl)
//   }

//   if (isProtected(pathname) && !hasSession) {
//     const loginUrl = request.nextUrl.clone()
//     loginUrl.pathname = "/sign-in"
//     loginUrl.searchParams.set("redirect", pathname)
//     return NextResponse.redirect(loginUrl)
//   }

//   if (isAuthRoute(pathname) && hasSession) {
//     const dashboardUrl = request.nextUrl.clone()
//     dashboardUrl.pathname = "/"
//     return NextResponse.redirect(dashboardUrl)
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
// }

import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const AUTH_COOKIE = "demo-auth"

const PROTECTED_PREFIXES: string[] = []
// No exact paths are protected now
const PROTECTED_EXACT: string[] = []
// Authentication routes
const AUTH_ROUTES = ["/sign-in", "/sign-up"]

const isProtected = (pathname: string) =>
  PROTECTED_EXACT.includes(pathname) || PROTECTED_PREFIXES.some(route => pathname.startsWith(route))

const isAuthRoute = (pathname: string) => AUTH_ROUTES.some(route => pathname.startsWith(route))

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const sessionCookie = request.cookies.get(AUTH_COOKIE)?.value

  // Check if session exists (supports both JSON format and legacy "true" format)
  const hasSession = !!sessionCookie && (sessionCookie === "true" || sessionCookie.startsWith("{"))

  // If user is authenticated and on auth routes, redirect to /chats
  if (isAuthRoute(pathname) && hasSession) {
    const chatsUrl = request.nextUrl.clone()
    chatsUrl.pathname = "/chats"
    return NextResponse.redirect(chatsUrl)
  }

  // If a protected route is accessed without session, redirect to sign-in
  if (isProtected(pathname) && !hasSession) {
    const loginUrl = request.nextUrl.clone()
    loginUrl.pathname = "/sign-in"
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  // All other requests proceed
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
}
