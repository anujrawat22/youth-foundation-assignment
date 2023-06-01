import React, { useState } from "react";
import "./addbooks.css";
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Addbooks = () => {
  const MySwal = withReactContent(Swal)
  const [formData,setFormData ] = useState({bookName: '',authorName : '',description : '',poster : ''})
  const handleChange = (event)=>{
  const {name,value} = event.target;
  setFormData((prevData)=>({...prevData,[name]: value}));

  
  }
  const handleformsubmit = (e) => {
    e.preventDefault();
    axios.post("https://backend-youth-foundation.onrender.com/book/addbook",formData).then(res=>{
      MySwal.fire({
        position: 'center',
        icon: 'success',
        title: 'Book Added Sucessfully',
        showConfirmButton: false,
        timer: 1500
      })
    }).catch((err)=>console.log(err))
  };
  return (
    <div id="addbooks_container">
      <form onSubmit={handleformsubmit}>
        <label for="authorName">Author</label>
        <input
          type="text"
          value={formData.authorName}
          placeholder="Author"
          name="authorName"
          id="authorName"
          onChange={handleChange}
        />
        <label for="bookName">Book</label>
        <input
          type="text"
          value={formData.bookName}
          placeholder="Book Title"
          name="bookName"
          id="bookName"
          onChange={handleChange}
        />
        <label for="description">Description</label>
        <textarea
          type="text"
          value={formData.description}
          placeholder="Description"
          name="description"
          id="description"
          onChange={handleChange}
        />
        <label for="poster">Poster</label>
        <input
          type="text"
          value={formData.poster}
          placeholder="Poster"
          name="poster"
          id="poster"
          onChange={handleChange}
        />
        <input type="submit" value="Add Book" id="submit"/>
      </form>
    </div>
  );
};

export default Addbooks;
