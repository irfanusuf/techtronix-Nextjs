"use client";

import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const router = useRouter();

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post("/api/user/login", formData);
      localStorage.setItem("authToken", data.payload);
      localStorage.setItem("userId", data.userId);
      toast.success(data.message);

      setTimeout(() => {
        router.push("/user/task/getAll");
      }, 2000);
      
    } catch (error) {
      if([400, 401, 403, 404 , 500].includes(error.response.status) ) {
        toast.error(error.response.data.message)
      }
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} method="post">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
