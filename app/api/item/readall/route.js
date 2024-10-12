import { NextResponse } from "next/server";
import connectDB, {prisma,dbType} from "../../../utils/database";
import {ItemModel} from "../../../utils/schemaModels";

export async function GET() {

    await connectDB();

    let allItems;
    try{
        if(dbType === "postgres"){ /** prisma + postgres 用 */
            allItems = await prisma.item.findMany()

        }else if(dbType === "mongo"){/** mongoose + mongoDB 用 */
            allItems = await ItemModel.find();
        }

        return NextResponse.json({message: "アイテム読み取り成功（オール）", allItems: allItems});

    }catch{
        return NextResponse.json({message: "アイテム読み取り失敗（オール）"});
    }
}

/** データ取得を毎回行う Next.js の設定 */
export const revalidate = 0;