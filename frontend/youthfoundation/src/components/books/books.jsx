import React, { useEffect, useState } from "react";
import "./Books.css";
import axios from "axios";
import ImgMediaCard from "../card/ImgMediaCard";
import { Box, CircularProgress } from "@mui/material";



const Books = () => {
  const [Books, setBooks] = useState([]);
  const fetchData = () => {
    axios
      .get("https://backend-youth-foundation.onrender.com/book/allbooks")
      .then((res) => {
        console.log(res.data.data);
        setBooks(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {Books.length > 0 ? (
        <div id="book_container">
          {Books.length > 0 && (
            Books.map((item) => {
              return <ImgMediaCard item={item} fetchData={fetchData} />;
            })
          ) }
          
        </div>
      ) :  <div className="loader"> 
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>}
    </>
  );
};

export default Books;
