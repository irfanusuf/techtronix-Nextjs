"use client";

import React, { useEffect, useState } from "react";
import "./styles.css";
import Link from "next/link";

const Navbar = () => {
  const [loggedIn, setloggedIn] = useState(false);


  useEffect(()=>{
    var token = localStorage.getItem("authToken")
    if(token){
      setloggedIn(true)
    }
  }, [])


  return (
    <div className="navbar">
      <div className="logo"> Brand Name </div>

      <ul>
        <li> {loggedIn && <Link href="/user/task/getAll"> Tasks </Link>} </li>
        <li> {loggedIn ? <Link href="/user/task/create"> create a Task</Link> : <Link href="/user/login"> Login</Link>}  </li> 
      </ul>
    </div>
  );
};

export default Navbar;
