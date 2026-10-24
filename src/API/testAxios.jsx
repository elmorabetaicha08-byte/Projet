import { useState } from "react";
import UserCard from "./UserCard";
export default function TestAxios(){
    const[users,setUser]=useState([]);
    function getUsers(){
        const getData=async()=>{
           
        };
        getData().then((userss)=>setUser(userss))
    }
    return(
        <div>
            <button onClick={getUsers}>Get Users</button>
            {users.map((user)=>(
                <div key={user.id}><UserCard user={user}/></div>
            ))}
        </div>
    )
}