import { useState } from "react";  

const ImgInput = (props) => {
    const [imageFile,setImageFile] = useState("")

    const handleClick = async() => {
        try{
            const data = new FormData()
            data.append("file",imageFile)
            data.append("upload_preset","e3khwlgr")
            data.append("cloud_name","dhi0zuslo")

            const response = await fetch("https://api.cloudinary.com/v_1/dhi0zuslo/image/upload",{
                method: "POST",
                body: data
            })

            const jsonData = await response.json()

            await props.setImage(jsonData.url)
            alert("画像アップロード成功")

        }catch{
            alert("画像アップロード失敗")

        }
    }

    return(
        <div className="img-input">
            <input type="file" 
                onChange={(e)=>{
                    setImageFile(e.target.files[0])
                }} 
                accept="image/png,image/jpg"
            />

            <button onClick={handleClick} disabled={!imageFile}>画像 Upload</button>
        </div>
    )

}

export default ImgInput