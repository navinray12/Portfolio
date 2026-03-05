const Message = require("../models/Message");

exports.sendMessage = async(req,res)=>{

const message = new Message(req.body);

await message.save();

res.json({
success:true,
message:"Message sent"
})

}