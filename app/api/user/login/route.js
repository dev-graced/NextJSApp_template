import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import connectDB from "../../../utils/database";
import {UserModel} from "../../../utils/schemaModels";

export async function POST(request) {

    const reqBody = await request.json();
    const email = reqBody.email;
    // console.log(reqBody);

    try{
        // console.log(await request.json());

        await connectDB();

        const savedUserData = await UserModel.findOne({email: email});

        if(savedUserData){
            /** ユーザーデータが存在する場合の処理 */

            console.log(savedUserData);

            if(reqBody.password === savedUserData.password){
                
                /** トークンを発行する処理 */
                const secretKey =  new TextEncoder().encode("ptInfoApp-book");
                const payload = { email: reqBody.email };
                const token = await new SignJWT(payload).setProtectedHeader({alg:"HS256"}).setExpirationTime("1d").sign(secretKey);
                // console.log(token);

                return NextResponse.json({message:"ログイン成功",token:token});
            }else{

                return NextResponse.json({message:"ログイン失敗：パスワードが違います"});
            }

        }else{

            return NextResponse.json({message:"ログイン失敗：ユーザー登録をしてください"});
        }

    }catch{
        return NextResponse.json({message:"ログイン失敗"});
    }
    
}                                              