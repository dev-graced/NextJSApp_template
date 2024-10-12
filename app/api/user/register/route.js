import { NextResponse } from "next/server";
import connectDB, {prisma,dbType} from "../../../utils/database";
import {UserModel} from "../../../utils/schemaModels";

export async function POST(request) {

    const reqBody = await request.json();
    // console.log(reqBody);

    try{
        // console.log(await request.json());

        await connectDB();

        if(dbType === "postgres"){
            await prisma.user.create({data: reqBody})
            
        }else if(dbType === "mongo"){
            await UserModel.create(reqBody);
        }
        

        return NextResponse.json({message:"ユーザー登録成功"});

    }catch{
        return NextResponse.json({message:"ユーザー登録失敗"});
    }
    
}                                              