import React, { useState } from "react";
import "./Admin.scss";
import axios from "axios";
import { ToastContainer, toast, Slide } from "react-toastify";

const Admin = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");

  const onChange = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(reader.result);
    };
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  const postData = () => {
    if (name.trim() === "" || price.trim() === "" || file.trim() === "") {
      toast.error(" Заполните пустые поля !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    } else {
      const data = {
        name,
        price,
        file,
      };

      axios.post(
        `https://api-crud.elcho.dev/api/v1/3babc-002f3-67ca4/foods`,
        data
      );
      console.log(data);
      setName("")
      setPrice("")
      setFile("")
    }
  };

  return (
    <div id="admin">
      <div className="container">
        <center>
          <h1>CREATE PRODUCT</h1>
        </center>
        <div className="admin">
          <div className="admin--panel">
            <label htmlFor="fileInput" className="admin--panel__label">
              choose file
            </label>
            <input
              type="file"
              id="fileInput"
              className="file"
              onChange={onChange}
            />
            <input
              type="text"
              placeholder="food name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="number"
              placeholder="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>

          <div className="admin--preview">
            {file ? <img src={file} alt={name} /> : <h1>place for a photo</h1>}
          </div>
        </div>
        <button onClick={() => postData()}>create</button>
      </div>
    </div>
  );
};

export default Admin;
