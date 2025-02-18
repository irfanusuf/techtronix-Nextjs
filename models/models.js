import mongoose from "mongoose";

// first we created schemas

const userSchema = mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
});

const taskSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  status: { type: String },
});


// then exported them 

// either export pre-compiled model or export new one 

export const User =   mongoose.models.User  ||  mongoose.model("User", userSchema);

export const Task =  mongoose.models.Task   ||   mongoose.model("Task", taskSchema);
