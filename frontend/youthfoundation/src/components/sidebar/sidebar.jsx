import React from 'react'
import './sidebar.css'
import { GoPerson } from "react-icons/go";
import {FaCrown} from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import { AiOutlinePlus,AiTwotoneAppstore } from "react-icons/ai";
import {ImHome, ImBooks } from "react-icons/im";
import { HiTemplate } from "react-icons/hi";
function Sidebar() {
    const navigate = useNavigate();
    const handlehome = ()=>{
        navigate("/")
    }

    const handleBooks = ()=>{
        navigate("/books")
    }

    const handleAddbooks = ()=>{
        navigate("/addbooks")
    }
  return (
    <div id='sidemain'>
      <div id="sidemainfirst">
        <img src="https://avatar.canva.com/avatars/users/52242d8d-6865-420c-b8da-9dd1361d516f/50.jpg" alt="img" id='avatar'/>
        <div>
            <h4>Personal</h4>
            <p>Free   <GoPerson/>   1</p>
        </div>
      </div>
      <div id='pro'>
       <button><FaCrown className='crown'/> Get Library Pro</button>
      </div>
      <div id='buttons'>
        <button onClick={handlehome}><ImHome className='icons'/> <span>Home</span> </button>
        <button onClick={handleBooks}><ImBooks className='icons'/><span>Books</span></button>
        <button onClick={handleAddbooks}><AiOutlinePlus className='icons'/><span>Add Books</span></button>
        <button> <HiTemplate className='icons'/>   <span>Templates</span></button>
        <button><AiTwotoneAppstore className='icons'/> <span>App</span></button>
      </div>
    </div>
  )
}

export default Sidebar