import mongoose from "mongoose";




const taskSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  status: { type: String },
});


// then exported them 

// either export pre-compiled model or export new one 

export const Task =  mongoose.models.Task   ||   mongoose.model("Task", taskSchema);
