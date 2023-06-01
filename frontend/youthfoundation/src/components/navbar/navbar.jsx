import React from "react";
import "./navbar.css";
import { BiChevronDown } from "react-icons/bi";


function Navbar() {
  return (
    <div className="navbar">
      <div id="first">
        <div id="ham">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M5.75 5.25h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 0 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5z"
            ></path>
          </svg>
          <img
            src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
            alt="icon"
          />
        </div>
        <div id="dropdowndiv">
            <div className="dropdowns">Design Spotlight<BiChevronDown/></div>
            <div className="dropdowns">Business<BiChevronDown/></div>
            <div className="dropdowns">Education<BiChevronDown/></div>
            <div className="dropdowns">Plans and pricing<BiChevronDown/></div>
            <div className="dropdowns">Learn<BiChevronDown/></div>
        </div>
      </div>
      <div id="second">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.5H4a.5.5 0 0 0-.5.5v7.444h17V6a.5.5 0 0 0-.5-.5ZM3.5 16v-1.139h17V16a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5ZM22 16V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v1.583H5.708a.708.708 0 0 0 0 1.417h12.584a.708.708 0 1 0 0-1.417H16V18h4a2 2 0 0 0 2-2Zm-7.5 2h-5v1.583h5V18Z" fill="currentColor"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 17.77c.37.19.75.34 1.15.46l.71 2.2c.73.1 1.47.1 2.2 0l.7-2.17c.47-.13.9-.31 1.31-.53l2.09 1.03c.58-.44 1.1-.96 1.55-1.53l-1.02-2.08c.25-.46.45-.95.6-1.47l2.16-.78c.08-.73.07-1.46-.05-2.18l-2.2-.7a6.47 6.47 0 0 0-.58-1.3l1-2.05c-.46-.57-1-1.09-1.59-1.52L15 6.23a6.46 6.46 0 0 0-1.15-.46l-.71-2.2c-.73-.1-1.47-.1-2.2 0l-.7 2.17c-.47.13-.9.31-1.31.53L6.84 5.24c-.58.44-1.1.96-1.55 1.53l1.02 2.08c-.25.46-.45.95-.6 1.47l-2.16.78c-.08.73-.07 1.46.05 2.18l2.2.7c.15.46.35.89.58 1.3l-1 2.05c.46.57 1 1.09 1.59 1.52L9 17.77zm-.02 1.71-2.1 1.11a9.94 9.94 0 0 1-3.24-3.1l1.1-2.27-2.44-.78a9.95 9.95 0 0 1-.1-4.45l2.55-.92-1.2-2.43a9.95 9.95 0 0 1 3.17-3.13l2.3 1.13.77-2.4a9.94 9.94 0 0 1 4.5.02l.73 2.26 2.1-1.11a9.94 9.94 0 0 1 3.24 3.1l-1.1 2.27 2.44.78c.36 1.43.4 2.95.1 4.45l-2.55.92 1.2 2.43a9.95 9.95 0 0 1-3.17 3.13l-2.3-1.13-.77 2.4a9.94 9.94 0 0 1-4.5-.02l-.73-2.26zM12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1.5a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path></svg>
      <button id="createbtn">Create a design</button>
      <img src="https://avatar.canva.com/avatars/users/52242d8d-6865-420c-b8da-9dd1361d516f/50.jpg" alt="" id="user"/>
      </div>
    </div>
  );
}

export default Navbar;
