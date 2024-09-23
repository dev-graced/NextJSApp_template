import { NextResponse } from "next/server";
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
            // ユーザーデータが存在する場合の処理
            console.log(savedUserData);

            if(reqBody.password === savedUserData.password){
                // password が正しい場合の処理
                return NextResponse.json({message:"ログイン成功"});
            }else{
                // password が違う場合の処理
                return NextResponse.json({message:"ログイン失敗：パスワードが違います"});
            }

        }else{
            //　ユーザーデータが存在しない場合の処理
            return NextResponse.json({message:"ログイン失敗：ユーザー登録をしてください"});
        }

    }catch{
        return NextResponse.json({message:"ログイン失敗"});
    }
    
}                                              