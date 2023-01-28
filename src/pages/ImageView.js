import React, { useState } from "react";

function ImageView() {
  const [imageUrl, setImageUrl] = useState(null);

  function handleFileSelect(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setImageUrl(URL.createObjectURL(selectedFile));
    }
  }

  return (
    <div className="App">
      <input type="file" onChange={handleFileSelect} />
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
}

export default ImageView;
