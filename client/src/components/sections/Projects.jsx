// const projects = [
//   {
//     title: "XKCD Email Subscription",
//     desc: "Automated email system with verification and cron jobs",
//   },
//   {
//     title: "Order Management System",
//     desc: "Manage products, orders and customers",
//   },
//   {
//     title: "MERN Portfolio Website",
//     desc: "Modern full stack portfolio with admin dashboard",
//   },
// ];

// function Projects() {
//   return (
//     <section className="py-20 bg-slate-800 text-white">

//       <div className="max-w-6xl mx-auto px-6">

//         <h2 className="text-4xl font-bold text-center mb-12">
//           Projects
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">

//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-slate-900 rounded-lg p-6 hover:scale-105 transition duration-300"
//             >

//               <h3 className="text-xl font-bold mb-3">
//                 {project.title}
//               </h3>

//               <p className="text-gray-400 mb-4">
//                 {project.desc}
//               </p>

//               <button className="text-blue-400 hover:underline">
//                 View Project →
//               </button>

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Projects;
import { useEffect, useState } from "react";
import API from "../../services/Api";

function Projects(){

const [projects,setProjects] = useState([]);

useEffect(()=>{

API.get("/projects")
.then(res => {

setProjects(res.data);

})

},[]);

return(

<section id="projects" className="py-20 bg-slate-800 text-white">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-12">

Projects

</h2>

<div className="grid md:grid-cols-3 gap-8">

{projects.map((project,index)=>(

<div
key={index}
className="bg-slate-900 p-6 rounded-lg hover:scale-105 transition"
>

<h3 className="text-xl font-bold mb-3">

{project.title}

</h3>

<p className="text-gray-400 mb-4">

{project.description}

</p>

<a
href={project.github}
target="_blank"
rel="noreferrer"
className="text-blue-400 hover:underline"
>

View Code →

</a>

</div>

))}

</div>

</div>

</section>

)

}

export default Projects