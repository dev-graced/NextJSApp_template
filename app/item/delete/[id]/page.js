"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

const DeleteItem = (context)=>{

    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [image,setImage] = useState("")
    const [description,setDescription] = useState("")
    const [email,setEmail] = useState("")

    const router = useRouter()

    useEffect(()=>{
        const getSingleItem = async(id)=>{
            const response = await fetch(`https://expert-broccoli-jv79rjjwxpp256jw-3000.app.github.dev/api/item/readsingle/${id}`,{cache: "no-store"});
            
            const jsonData = await response.json();
            
            const singleItem = jsonData.singleItem;
            // console.log(singleItem);
        
            setTitle(singleItem.title)
            setPrice(singleItem.price)
            setImage(singleItem.image)
            setDescription(singleItem.description)
            setEmail(singleItem.email)
        }

        getSingleItem(context.params.id)
    },[context])

    const handleSubmit = async(e)=>{

        e.preventDefault()

        try{
            const response = await fetch(`https://expert-broccoli-jv79rjjwxpp256jw-3000.app.github.dev/api/item/delete/${context.params.id}`,{
                method: "DELETE",
                headers:{
                    "Accept": "application/json",
                    "Content-Type" : "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    email: "dummy1@gmail.com"
                })
            })

            const jsonData = await response.json()
            alert(jsonData.message)

            router.push("/")
            router.refresh()

        }catch{
            console.log("アイテムの削除が失敗しました")
        }
    }

    return (
        <div>
            <h1>アイテム削除</h1>

            <form onSubmit={handleSubmit}>

                <Image src={image} width={750} height={500} alt={title} priority/>
                <h1>{title}</h1>
                <h2>{price}</h2>
                <p>{description}</p>

                <button>削除</button>
            </form>
        </div>
    )
}

export default DeleteItem