import {useState} from "react"
import API from "../services/Api"

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSubmit = async(e)=>{

e.preventDefault()

const res = await API.post("/auth/login",{email,password})

localStorage.setItem("token",res.data.token)

window.location="/admin"

}

return(

<div className="min-h-screen flex items-center justify-center bg-slate-900">

<form
onSubmit={handleSubmit}
className="bg-slate-800 p-8 rounded text-white w-80"
>

<h2 className="text-2xl mb-4">Admin Login</h2>

<input
type="email"
placeholder="Email"
className="w-full p-2 mb-3 bg-slate-700"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="w-full p-2 mb-4 bg-slate-700"
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="w-full bg-blue-500 py-2 rounded">

Login

</button>

</form>

</div>

)

}

export default Login