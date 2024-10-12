import Image from "next/image"
import Link from "next/link"
import { dbType } from "@/app/utils/database";

const getSingleItem = async(id)=>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readsingle/${id}`,{cache: "no-store"});
    
    const jsonData = await response.json();
    console.log("response",jsonData.message);
  
    const singleItem = jsonData.singleItem;
  
    return singleItem;
}

const ReadSingleItem = async(context)=>{
    // console.log(context)
    const singleItem = await getSingleItem(context.params.id)

    return (
        <div className="grid-container-si">

            <title>{singleItem.title}</title>
            <meta name="description" content ={singleItem.description}/>

            <div>
                <Image src={singleItem.image} width={750} height={500} alt={singleItem.title} priority/>
                {/* <img src={singleItem.image} alt={singleItem.title}/> */}
            </div>
            <div>
                <h1>{singleItem.title}</h1>
                <h2>{singleItem.price}</h2>
                <br/>
                <p>{singleItem.description}</p>

                <div>
                    <Link href={`/item/update/${(dbType === "mongo") ? singleItem._id : singleItem.id}`}>アイテム編集</Link>
                    <Link href={`/item/delete/${(dbType === "mongo") ? singleItem._id : singleItem.id}`}>アイテム削除</Link>
                </div>
            </div>
        </div>
    )
}

export default ReadSingleItem