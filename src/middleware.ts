import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

const ProtectedRoute = ["/dashboard"];
export default function middleware(req: NextRequest) {
    // dapatkan url nya
    const url = req.nextUrl.clone();

    // cek apakah ada token session di dalamnya
    const token = req.cookies.get("next-auth.session-token")?.value;
    console.log(token);
    if (!token) {
        return NextResponse.redirect(new URL("/login",req.url));
    }

    // cek apakah path yang di minta sekarang merupakan Protected route
    if (ProtectedRoute.some((el) => url.pathname.startsWith(el)) && !token) {
        return NextResponse.redirect(new URL("/login",req.url));
    }

    return NextResponse.next();
}


export const config = {
    matcher:["/dashboard/:path*"]
}