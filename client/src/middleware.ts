import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = true;


  // Check if the request is for the root path `/`
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Check if pathname "/login" || "/register"
  const loggedInUserNotAccessPaths = ["/login", "/register"].includes(pathname);

  if (loggedInUserNotAccessPaths) {

    // prevent to access login and register page if already login
    if (token) return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Continue with the request if it's not for `/`
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/register"],
};
