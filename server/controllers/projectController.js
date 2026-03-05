const Project = require("../models/Project");

exports.getProjects = async(req,res)=>{

const projects = await Project.find();

res.json(projects);

}

exports.createProject = async(req,res)=>{

const project = new Project(req.body);

await project.save();

res.json(project);

}
exports.deleteProject = async (req,res)=>{

await Project.findByIdAndDelete(req.params.id);

res.json({
success:true,
message:"Project Deleted"
})

}