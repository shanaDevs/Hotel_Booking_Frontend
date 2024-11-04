import { useState } from "react"
import axios from "axios"
import "./login.css"
export default function LoginPage(){

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    function handleLogin (){
        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/login",{
            email:email,
            password:password,
        }).then(
            (res) =>{
                localStorage.setItem("token",res.data.token)
                if(res.data.user.type ==="admin"){
                    window.location.href="/admin/"
                }else if(res.data.user.type ==="Customer"){
                window.location.href="/"
                }else{
                    alert('error user type')
                }
            }
        ).catch((err)=>{
            console.log(err)
            alert("Invalid credentials")
        })
            }

    return(
        <div className="w-full h-[100vh] pic-bg flex justify-center items-center">
            <div className="w-[400px] h-[400px] backdrop-blur-md rounded-lg flex flex-col items-center justify-center">
                <h1 className="text-white text-4xl p-[20px] text-center absolute top-[40px]">Login</h1>
                <input type="text" placeholder="Enter your email address" className="w-[80%] bg-[#0000] border-[2px] text-white outline-none h-[50px] px-[5px] mb-[5px]" defaultValue={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                <input type="password" placeholder="Enter your password" className="w-[80%] bg-[#0000] border-[2px] text-white outline-none h-[50px] px-[5px]" defaultValue={password} onChange={
                    (p)=>{
                    setPassword(p.target.value)
                }}/>
                <button className="w-80 absolute bottom-[40px] bg-red-500 text-white h-[50px]" onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}