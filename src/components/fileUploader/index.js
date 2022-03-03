import React from "react";
import { useState } from "react";
import css from "./fileuploader.module.css"

const ImageUploader = () => {
  const [images, setImages] = useState([]);

  const handleClick = (e) => {
    setImages([...images, e.target.files]);
  };
  if (images[0] !== undefined) {
    console.log(images[0][0].name);
  }

  console.log(images);

  const handleDelete = (e) => {
    const index = e.target.value;
    const array = [...images.slice(0, index ), ...images.slice(index + 1)];
   setImages(array)
  };

  return (
    <div>
      <input type="file" onChange={handleClick} />

      {images[0] !== undefined ? (
        images.map((item, index) => (
          <div className={css.images}>
            <p>{item[0].name}</p>
            <button value={index} onClick={handleDelete}>
              x
            </button>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageUploader;
