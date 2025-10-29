import { NextResponse } from "next/server";
import { rateLimit } from "./app/utils/rateLimit"

export async function middleware(request){
    const allowedOrigins = ["http://localhost:3000","https://abc.com"];

    if(request.method == 'GET'){

        const origin = request.headers.get('origin');

        if(allowedOrigins.includes(origin)){
            return NextResponse.json({message : "CORS BLOCKED"},{status : 403});
        }

        let ip = request.ip || request.headers.get("x-forwarded-for") || 'unknown'

        const {limit , remaining ,reset} = await rateLimit.limit(ip);
        console.log(limit ,remaining , "limit and remaining");
        if(remaining === 0 ){
            return NextResponse.json({message : "You've reached api limit"} , {status : 429});
        }
        return NextResponse.next();
    }
}

export const config =  {
    matcher : '/api/v1/:path'
}