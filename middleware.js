import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request) {

    // console.log("ミドルウェア");

    /**
     * リクエストに格納されたトークンを取得
     * @type {String}
     */
    // const token = await request.headers.get("Authorization")?.split(" ")[1];
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15MUBnbWFpbC5jb20iLCJleHAiOjE3MjcyNzAyMjZ9.g1lUCgRc7b7YuC7dNXKtGABpn4ijcoiPfS0mKPxZD7I";

    if(!token){
        return NextResponse.json({message:"トークンがありません"});
    }

    try{
        /**
         * トークンの生成に用いる秘密鍵
         * @type {String}
         */
        const secretKey =  new TextEncoder().encode("ptInfoApp-book");

        const decodedJwt = await jwtVerify(token,secretKey);
        // console.log("decodedJwt:",decodedJwt);

        return NextResponse.next();
    }catch{
        return NextResponse.json({message:"トークンが正しくないので、ログインしてください"});
    }
        
}

/**
 * middleware の設定
 * @type {Object}
 */
export const config = {
    matcher: ["/api/item/create","/api/item/update/:path*","/api/item/delete/:path*"],
}