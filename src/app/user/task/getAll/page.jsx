"use client"


import axios from "axios";
import React, { useEffect, useState } from "react";

const GetAll = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const { data } = await axios.get("/api/task/getAll");

      setTasks(data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>   
      {tasks && tasks.map((task) => (
        <div key = {task._id} >
          <h1> {task.title}</h1>
          <h3> {task.description}</h3>
          <p>{task.status}</p>
        </div>
      ))}
    </div>
  );
};

export default GetAll;
