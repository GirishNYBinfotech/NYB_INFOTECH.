import React, { useState } from "react";

function FileInput(){
  const [file, setFile]=useState(null)
  const handleFileChange=(e)=>{
    setFile(e.target.files[0])
    console.log(e)
  }
  return (
    <div>
      <h2>File Input</h2>
      <label>Select File: </label>
      <input
        type="file"
        onChange={handleFileChange}
      />
      {file && (
        <div>
          <h3>Selected File:</h3>
          <p>File Name:{file.name}</p>
          <p>File Type:{file.type}</p>
          <p>File Size:{file.size}bytes</p>
        </div>
      )}
    </div>
  )
}

export default FileInput