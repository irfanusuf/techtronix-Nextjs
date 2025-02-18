



const messagehandler = (res, statusCode, message, payload) => {
  return res
    .status(statusCode)
    .json({ message: message, payload: payload});
};

export default messagehandler;
