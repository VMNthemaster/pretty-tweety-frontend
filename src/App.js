import { useState } from "react";
import axios from 'axios'
import React from "react";

function App() {
  const [file, setFile] = useState('')
  const [fileUrl, setFileUrl] = useState("")
  const handleSubmit = async (e) => {
    console.log(file, typeof file)
    e.preventDefault()
    const formData = new FormData()
    formData.append("image", file)
    const res = await axios.post('http://localhost:5000/api/bg/postbgimage', formData, 
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
      
    }
    )
    console.log(res)
    setFileUrl(res.data.newBackgroundImage.awsUrl)
  } 

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" name="image" onChange={(e) => setFile(e.target.files[0])} placeholder="Enter background image" />
        <button type="submit">Submit</button>

      {fileUrl && <img src={fileUrl} alt="bgimage" />}

      </form>
    </div>
  );
}

export default App;
