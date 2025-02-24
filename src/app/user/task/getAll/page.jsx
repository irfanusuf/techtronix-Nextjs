"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { MdOutlinePendingActions } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { toast } from "react-toastify";

const GetAll = () => {
  const [tasks, setTasks] = useState([]);
  const [loading , setLoading] = useState(false)

  const getTasks = async () => {
    try {
      const { data } = await axios.get("/api/task/getAll");

      setTasks(data.payload);
    } catch (error) {
      console.log(error);
    }
  };


  const handleProgress = (taskId)=>{

    try {
      setLoading(true)
      const {data} = axios.get(`/api/task/inProgress/${taskId}`)
      toast.success(data.message)
      getTasks()

    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  }

  const handleCompletion= (taskId)=>{

    try {
      setLoading(true)
      const {data} = axios.get(`/api/task/complete/${taskId}`)
      toast.success(data.message)
      getTasks()
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  }

  const handleDelete= (taskId)=>{

    try {
      setLoading(true)
      const {data} = axios.get(`/api/task/delete/${taskId}`)
      toast.success(data.message)
      getTasks()
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  }


  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="container">
      <div className="tasks">
        {tasks &&
          tasks.map((task) => (
            <div key={task._id} className="task">
              <div className="heading">
                <h1> {task.title} </h1>
                <span className="pending">

                  {task.status === "pending" && <MdOutlinePendingActions />}
                </span>

                <span className="progress">
 
                  {task.status === "inProgress" && <GrInProgress />}
                </span>
              </div>

              <h4> {task.description}</h4>

             {/* {task.status === "complete" ? <button>Edit</button> : <button>Edit</button>} */}



              {task.status === "pending" ? <button onClick={()=>{handleProgress(task._id)}}> In Progress </button> :
              task.status === "inProgress" ?  <button onClick={()=>{handleCompletion(task._id)}} > Task Completed </button> :
              task.status == "complete" ? <button onClick={()=>{handleDelete(task._id)}}>Delete</button> :  null }


         
             
            </div>
          ))}
      </div>
    </div>  
  );
};

export default GetAll;
