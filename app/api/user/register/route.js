import { NextResponse } from "next/server";
import connectDB from "../../../utils/database";
import {UserModel} from "../../../utils/schemaModels";

export async function POST(request) {

    const reqBody = await request.json();
    // console.log(reqBody);

    try{
        // console.log(await request.json());

        await connectDB();

        await UserModel.create(reqBody);

        return NextResponse.json({message:"ユーザー登録成功"});

    }catch{
        return NextResponse.json({message:"ユーザー登録失敗"});
    }
    
}                                              