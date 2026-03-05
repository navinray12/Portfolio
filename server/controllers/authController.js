const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.login = async(req,res)=>{

const {email,password} = req.body;

const admin = await Admin.findOne({email});

if(!admin){
return res.status(400).json({message:"Admin not found"})
}

const isMatch = await bcrypt.compare(password,admin.password);

if(!isMatch){
return res.status(400).json({message:"Invalid credentials"})
}

const token = jwt.sign(
{ id:admin._id },
"secretkey",
{expiresIn:"1d"}
)

res.json({token})

}