import connectDb from "../../../config/connectDb";
import { Task } from "../../../models/models";
import messagehandler from "../../../utils/messagehandler";

export default async function create(req, res) {
  try {
    await connectDb();

    if (req.method !== "POST")
      return messagehandler(res, 400, "Only POST Method is allowed");

    const { title, description } = req.body;

    if (title === "" || description === "") {
      return messagehandler(
        res,
        400,
        "Title and Description both are required!"
      );
    }

    const newTask = await Task.create({
      title,
      description,
      status: "pending",
    });

    if (newTask) {
      return messagehandler(res, 200, "Task Created!");
    } else {
      return messagehandler(res, 400, "Something Went wrong");
    }
  } catch (error) {
    console.log(error);

    return messagehandler(res, 500, "Server Error");
  }
}
