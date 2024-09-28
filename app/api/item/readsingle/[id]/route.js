import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import {ItemModel} from "../../../../utils/schemaModels";

export async function GET(request,context) {

    // console.log(context.params.id);

    try{
        await connectDB();

        const singleItem = await ItemModel.findById(context.params.id);


        return NextResponse.json({message: "アイテム読み取り成功（single）",singleItem: singleItem});
    }catch{
        return NextResponse.json({message: "アイテム読み取り失敗（single）"});
    }
}

/** データ取得を毎回行う Next.js の設定 */
export const revalidate = 0;