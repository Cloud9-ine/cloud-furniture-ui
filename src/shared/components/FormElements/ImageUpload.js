import React, { useRef, useState, useEffect } from "react";

import Button from "./Button";
import './ImageUpload.css';

const ImageUpload = (props) => {
  const imageInputRef = useRef();
  const [imgFile, setImgFile] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!imgFile) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(imgFile);
  }, [imgFile]);

  const selectImgHandler = () => {
    imageInputRef.current.click();
  };

  const uploadImgHandler = (event) => {
    let uploadImgList
    let imgValid;
    if (event.target.files && event.target.files.length > 0) {
      uploadImgList = event.target.files;
      imgValid = true;
      setImgFile(uploadImgList[0]);
      setIsValid(true);
    } else {
      imgValid = false;
      setIsValid(false);
    }
    props.onInput(props.id, uploadImgList, imgValid);
  }

  return (
    <div className="form-control">
      <input 
        ref={imageInputRef}
        id={props.id}
        label={props.label}
        style={{display: "none"}} 
        type="file" 
        accept=".jpg,.jpeg,.jpeg"
        onChange={uploadImgHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>Please add an image.</p>}
        </div>
        <Button type="button" onClick={selectImgHandler}>Add Image</Button>
      </div>
    </div>
  );
};

export default ImageUpload;