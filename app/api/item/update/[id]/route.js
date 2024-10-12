import { NextResponse } from "next/server";
import connectDB, {prisma,dbType} from "../../../../utils/database";
import {ItemModel} from "../../../../utils/schemaModels";

export async function PUT(request,context) {

    // console.log(context.params.id);
    const reqBody = await request.json();

    const id = parseInt(context.params.id)

    /**  アイテム編集の処理　*/
    try{
        await connectDB();

        let singleItem;
        if(dbType === "postgres"){
            singleItem = await prisma.item.findUnique({
                where: {id: id}
            })

            if(singleItem.email === reqBody.email){
                await prisma.item.update({
                    where: {id: id},
                    data: reqBody
                })

                return NextResponse.json({message: "アイテム編集成功"});
            }else{
                return NextResponse.json({message: "他の人が編集したアイテムです"});
            }

        }else if(dbType === "mongo"){
            singleItem =  await ItemModel.findById(id);

            if(singleItem.email === reqBody.email){
                await ItemModel.updateOne({_id: id},reqBody);

                return NextResponse.json({message: "アイテム編集成功"});
            }else{
                return NextResponse.json({message: "他の人が編集したアイテムです"});
            }
        }
        

    }catch{
        return NextResponse.json({message: "アイテム編集失敗"});
    }
}