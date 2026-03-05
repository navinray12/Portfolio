import { useState, useEffect } from "react";
import API from "../services/Api";

function Admin(){

const [projects,setProjects] = useState([]);

const [project,setProject] = useState({
title:"",
description:"",
github:"",
live:""
})

useEffect(()=>{
    if(!localStorage.getItem("token")){
window.location="/login"
}
fetchProjects()
},[])

const fetchProjects = async()=>{

const res = await API.get("/projects");

setProjects(res.data)

}

const handleChange = (e)=>{

setProject({
...project,
[e.target.name]:e.target.value
})

}

const handleSubmit = async(e)=>{

e.preventDefault();

await API.post("/projects",project);

fetchProjects();

setProject({
title:"",
description:"",
github:"",
live:""
})

}

const deleteProject = async(id)=>{

await API.delete(`/projects/${id}`);

fetchProjects();

}

return(

<div className="min-h-screen bg-slate-900 text-white p-10">

<h1 className="text-3xl mb-8">

Admin Dashboard

</h1>

<form
onSubmit={handleSubmit}
className="flex flex-col gap-4 max-w-xl mb-10"
>

<input
name="title"
value={project.title}
onChange={handleChange}
placeholder="Project Title"
className="p-3 bg-slate-700 rounded"
/>

<input
name="description"
value={project.description}
onChange={handleChange}
placeholder="Description"
className="p-3 bg-slate-700 rounded"
/>

<input
name="github"
value={project.github}
onChange={handleChange}
placeholder="Github Link"
className="p-3 bg-slate-700 rounded"
/>

<input
name="live"
value={project.live}
onChange={handleChange}
placeholder="Live Link"
className="p-3 bg-slate-700 rounded"
/>

<button
className="bg-blue-500 py-3 rounded"
>

Add Project

</button>

</form>

<h2 className="text-2xl mb-4">

Project List

</h2>

<div className="grid md:grid-cols-3 gap-6">

{projects.map((p)=>(

<div
key={p._id}
className="bg-slate-800 p-6 rounded"
>

<h3 className="text-xl font-bold">

{p.title}

</h3>

<p className="text-gray-400">

{p.description}

</p>

<button
onClick={()=>deleteProject(p._id)}
className="mt-3 bg-red-500 px-4 py-2 rounded"
>

Delete

</button>

</div>

))}

</div>

</div>

)

}

export default Admin