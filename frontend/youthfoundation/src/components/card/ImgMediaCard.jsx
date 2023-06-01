import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ImgMediaCard({ item, fetchData, handleopen }) {
  const navigate = useNavigate();
  const handleEdit = (id) => {
    localStorage.setItem("id",JSON.stringify(id))
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
    <Card sx={{ maxWidth: 300 }} key={item.id} height="auto">
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={item.poster}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.bookName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" onClick={()=>{
            handleEdit(item._id)
        }}>
          Edit
        </Button>

        <Button
          size="small"
          variant="contained"
          onClick={() => {
            handleDelete(item._id);
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
