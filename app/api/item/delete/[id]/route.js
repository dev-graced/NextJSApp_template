import { NextResponse } from "next/server";
import connectDB, {prisma,dbType} from "../../../../utils/database";
import {ItemModel} from "../../../../utils/schemaModels";

export async function DELETE(request,context) {

    // console.log(context.params.id);

    const reqBody = await request.json();
    const id = parseInt(context.params.id)

    try{
        await connectDB()
    
        if(dbType === "postgres"){
            const singleItem = await prisma.item.findUnique({
                where: {id: id}
            });

            if(singleItem.email === reqBody.email){
                await prisma.item.delete({
                    where: {id: id}
                });

                return NextResponse.json({message: "アイテム削除成功"});
            }else{
                return NextResponse.json({message: "他の人が作成したアイテムです"});
            }

        }else if(dbType === "mongo"){
            const singleItem =  await ItemModel.findById(id);

            if(singleItem.email === reqBody.email){
                await ItemModel.deleteOne({_id: id});

                return NextResponse.json({message: "アイテム削除成功"});
            }else{
                return NextResponse.json({message: "他の人が作成したアイテムです"});
            }
        }

    }catch{
        return NextResponse.json({message: "アイテム削除失敗"});
    }
}