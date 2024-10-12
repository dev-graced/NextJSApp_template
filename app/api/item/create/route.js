import { NextResponse } from "next/server";
import connectDB, {prisma,dbType} from "../../../utils/database";
import {ItemModel} from "../../../utils/schemaModels";

export async function POST(request) {

    const reqBody = await request.json();
    // console.log(reqBody);

    try{
        // console.log(await request.json());
        await connectDB()

        if(dbType === "postgres"){
            /** prisma + postgres　用 */
            await prisma.item.create({data: reqBody})

        }else if(dbType === "mongo"){
            /** mongoose + mongoDB 用 */
            await ItemModel.create(reqBody);

        }

        return NextResponse.json({message:"アイテム作成成功"});

    }catch{
        return NextResponse.json({message:"アイテム作成失敗"});
    }
    
}                                                                                                                                   