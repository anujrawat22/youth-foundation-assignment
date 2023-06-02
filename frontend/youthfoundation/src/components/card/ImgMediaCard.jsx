import * as React from "react";

import Button from "@mui/material/Button";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ImgMediaCard.css";

export default function ImgMediaCard({ item, fetchData, handleopen }) {
  const navigate = useNavigate();
  const handleEdit = (id) => {
    localStorage.setItem("id", JSON.stringify(id));
    navigate("/update");
  };
  const handleDelete = (id) => {
    axios
      .delete(`https://backend-youth-foundation.onrender.com/book/${id}`)
      .then((res) => {
        if (res.data.msg === `Book with id - ${id} deleted sucessfully`) {
          fetchData();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
 

    <div id="card">
      <img src={item.poster} alt="img" className="poster" />
      <div id="card_body">
        <h2 className="book">{item.bookName}</h2>
        <h5>
          Author : <span>{item.authorName}</span>{" "}
        </h5>
        <p>{item.description}</p>
      </div>
      <div id="card_footer">
        <Button
          variant="outlined"
          onClick={() => {
            handleEdit(item._id);
          }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            handleDelete(item._id);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
