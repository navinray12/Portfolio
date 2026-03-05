const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

mongoose.connect("mongodb+srv://navin12:navin1208@cluster0.3vitn.mongodb.net/portfolio");

async function createAdmin(){

const hash = await bcrypt.hash("Br22@Bihar",10);

await Admin.create({
email:"admin@gmail.com",
password:hash
})

console.log("Admin created")

process.exit()

}

createAdmin();