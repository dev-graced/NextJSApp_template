import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import {ItemModel} from "../../../../utils/schemaModels";

export async function PUT(request,context) {

    // console.log(context.params.id);
    const reqBody = await request.json();

    /**  アイテム編集の処理　*/
    try{
        await connectDB();

        const singleItem =  await ItemModel.findById(context.params.id);

        if(singleItem.email === reqBody.email){
            await ItemModel.updateOne({_id: context.params.id},reqBody);

            return NextResponse.json({message: "アイテム編集成功"});
        }else{
            return NextResponse.json({message: "他の人が編集したアイテムです"});
        }

    }catch{
        return NextResponse.json({message: "アイテム編集失敗"});
    }
}