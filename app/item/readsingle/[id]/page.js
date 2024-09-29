import Image from "next/image"
import Link from "next/link"

const getSingleItem = async(id)=>{
    const response = await fetch(`https://expert-broccoli-jv79rjjwxpp256jw-3000.app.github.dev/api/item/readsingle/${id}`,{cache: "no-store"});
    
    const jsonData = await response.json();
  
    const singleItem = jsonData.singleItem;
    // console.log(singleItem);
  
    return singleItem;
}

const ReadSingleItem = async(context)=>{
    // console.log(context)
    const singleItem = await getSingleItem(context.params.id)

    return (
        <div className="grid-container-si">

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
                    <Link href={`/item/update/${singleItem._id}`}>アイテム編集</Link>
                    <br/>
                    <Link href={`/item/delete/${singleItem._id}`}>アイテム削除</Link>
                </div>
            </div>
        </div>
    )
}

export default ReadSingleItem