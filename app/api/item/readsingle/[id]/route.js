import { NextResponse } from "next/server";
import connectDB, {prisma,dbType} from "../../../../utils/database";
import {ItemModel} from "../../../../utils/schemaModels";

export async function GET(request,context) {

    try{
        await connectDB();

        let singleItem;
        if(dbType === "mongo"){
            singleItem = await ItemModel.findById(context.params.id);

        }else if(dbType === "postgres"){
            // console.log("dbType = postgres DB")
            singleItem = await prisma.item.findUnique({
                where: {id: parseInt(context.params.id)}
            })
        }

        return NextResponse.json({message: "アイテム読み取り成功（single）",singleItem: singleItem});
    }catch{
        return NextResponse.json({message: "アイテム読み取り失敗（single）"});
    }
}

/** データ取得を毎回行う Next.js の設定 */
export const revalidate = 0;