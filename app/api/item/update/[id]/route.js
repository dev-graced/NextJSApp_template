import { NextResponse } from "next/server";

import connectDB from "../../../../utils/database";

import {ItemModel} from "../../../../utils/schemaModels";

export async function PUT(request,context) {

    // console.log(context.params.id);
    const reqBody = await request.json();

    try{
        await connectDB();

        const singleItem = await ItemModel.updateOne({_id: context.params.id},reqBody);


        return NextResponse.json({message: "アイテム編集成功"});
    }catch{
        return NextResponse.json({message: "アイテム編集失敗"});
    }
}