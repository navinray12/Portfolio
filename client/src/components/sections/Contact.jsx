import { useState } from "react";
import API from "../../services/Api";

function Contact(){

const [form,setForm] = useState({
name:"",
email:"",
message:""
});

const handleChange = (e)=>{

setForm({
...form,
[e.target.name]:e.target.value
})

}

const handleSubmit = async(e)=>{

e.preventDefault();

try{

await API.post("/contact",form);

alert("Message Sent Successfully");

setForm({
name:"",
email:"",
message:""
})

}catch(error){

console.log(error);

}

}

return(

<section id="contact" className="py-20 bg-slate-800 text-white">

<div className="max-w-4xl mx-auto px-10">

<h2 className="text-4xl font-bold mb-10">

Contact Me

</h2>

<form
onSubmit={handleSubmit}
className="flex flex-col gap-4"
>

<input
type="text"
name="name"
value={form.name}
onChange={handleChange}
placeholder="Your Name"
className="p-3 rounded bg-slate-700"
/>

<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
placeholder="Email"
className="p-3 rounded bg-slate-700"
/>

<textarea
name="message"
value={form.message}
onChange={handleChange}
rows="5"
placeholder="Message"
className="p-3 rounded bg-slate-700"
/>

<button
type="submit"
className="bg-blue-500 py-3 rounded hover:bg-blue-600"
>

Send Message

</button>

</form>

</div>

</section>

)

}

export default Contact