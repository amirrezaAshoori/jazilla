import { NextResponse } from "next/server";
import { AUTH_TOKEN_KEY } from "./constants";

export function middleware(req) {
    const userToken = req.cookies.get(AUTH_TOKEN_KEY)?.value;
    const host = req.nextUrl.protocol + req.headers.get("host");

    if (userToken && req.nextUrl.pathname === "/signin") {
        return NextResponse.redirect(new URL("/", req.url));
    }

    if (userToken && req.nextUrl.pathname === "/signup") {
        return NextResponse.redirect(new URL("/", req.url));
    }

    if (!userToken && req.nextUrl.pathname.includes("/account")) {
        return NextResponse.redirect(new URL("/signin", req.url));
    }
}

export const config = {
    matcher: ["/account/:path*", "/signin/:path*", "/signup/:path*"],
};