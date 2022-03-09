import "./App.css";
import API from "./BaseApiInstance";
import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [file, setFile] = useState(undefined);
  
  const handleFile = async(e : any) : Promise<void> => 
  {
    let image = await e.target.files[0];
    setFile(image);
    console.log(e.target.files[0]);
  };

  const handleUpload = async () : Promise<void> => 
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
      .then((response) => {
        console.log("response upload: ", response.data);
      })
      .catch((e) => {
        console.log("Error is: ", e);
      });
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
