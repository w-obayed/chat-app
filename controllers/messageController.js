import asynsHandler from "express-async-handler";
import Chat from "../models/Chat.js";
import Message from "../models/Message.js";

/**
 * @description create new message
 * @method POST
 * @route /api/v1/message/new-message
 * @access public
 */
export const createNewMessage = asynsHandler(async (req, res) => {
  // create message
  const message = new Message(req.body);

  //   check new chat
  if (!message) {
    return res.status(400).json({ message: "something wrong!" });
  }

  //   save chat in database
  const saveMessage = await message.save();

  //   update the chat collection last message
  const currentChat = await Chat.findOneAndUpdate(
    {
      _id: req.body.chatId,
    },
    {
      lastMessage: saveMessage._id,
      $inc: { unReadMessageCount: 1 },
    }
  );

  res
    .status(201)
    .json({ data: saveMessage, message: "message send successfull!" });
});
