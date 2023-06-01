import React, { useEffect, useState } from "react";
import "./updatebook.css";
import axios from "axios";

const Updatebook = () => {
  const [id, setId] = useState("");
  const [item, setItem] = useState({});
  const fetchItem = () => {
    setId(JSON.parse(localStorage.getItem("id")));
    console.log(id);

    axios
      .get(`https://backend-youth-foundation.onrender.com/book/search/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setItem(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchItem();
  }, []);
  return (
    <div>
      <input type="text" value={item.bookName} />
      <input type="text" value={item.authorName} />
      <textarea type="text" value={item.description} />
      <input type="text" value={item.poster} />
    </div>
  );
};

export default Updatebook;
