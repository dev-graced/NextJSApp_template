// "use client"

const getAllItems = async()=>{
  const response = await fetch("https://expert-broccoli-jv79rjjwxpp256jw-3000.app.github.dev/api/item/readall");

  const jsonData = await response.json();

  // console.log(jsonData.allItems);

  const allItems = jsonData.allItems;

  return allItems;
}

const ReadAllItems = async() => {
  const allItems = await getAllItems();

  console.log(allItems);

  return(
    <div>
      <h1 className="h1-style">こんにちは</h1>
      <h3>さようなら</h3>
    </div>
  )
}

export default ReadAllItems;