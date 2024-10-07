//  "use client"

import Link from "next/link";
import Image from "next/image"

const getAllItems = async()=>{
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readall`,{cache: "no-store"});
  // const response = await fetch("https://fictional-goldfish-rq6w744vq6rfwwrw-3000.app.github.dev/api/item/readall",{cache: "no-store"});

  const jsonData = await response.json();
  // console.log(jsonData);

  const allItems = jsonData.allItems;
  // console.log(allItems);

  return allItems;
}

const ReadAllItems = async() => {
  // console.log(process.env.NEXT_PUBLIC_URL)

  const allItems = await getAllItems();

  // console.log(allItems);

  return(
    <div className="grid-container-in">

      {allItems.map(item => 
        <Link href={`/item/readsingle/${item._id}`} key={item._id}>
          <Image src={item.image} width={750} height={500} alt={item.title} priority/>
          <div>
            <h2>{item.price}</h2>
            <h3>{item.title}</h3>
            <p>{item.description.substring(0,80)}...</p>
          </div>
        </Link>
      )};
    </div>
  )
}

export default ReadAllItems;