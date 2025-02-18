




import mongoose from "mongoose";

const uri = "mongodb+srv://irfanusuf33:robolox@robolox.xnj0z.mongodb.net/TechtronixTAsk?retryWrites=true&w=majority&appName=robolox"

const connectDb = async () => {


  if (mongoose.connections[0].readyState) {
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("Connected to database");
  } catch (error) {
    console.error(error);
  }
};

export default connectDb;

