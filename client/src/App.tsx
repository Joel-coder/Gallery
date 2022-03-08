import "./App.css";
import API from "./BaseApiInstance";
import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [file, setFile] = useState(undefined);
  
  const handleFile = async(e : any) : Promise<any> => 
  {
    let image = await e.target.files[0];
    setFile(image);
    console.log(e.target.files[0]);
  };

  const handleUpload = async () : Promise<any> => 
  {
    const formData = new FormData();
    if (file) {
    formData.append('image', file);
    API()
      .post("/images/post", formData, {
      headers: {
        accept: "application/json",
            "Content-Type": "multipart/form-data",
      }
      })
    }
  }

  return (
    <div className="App">
      <input
        type="file"
        name="file"
        onChange={(e) => {
          handleFile(e);
        }}
      ></input>
      <button type="button">upload</button>
    </div>
  );
}

export default App;
