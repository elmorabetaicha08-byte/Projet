import { useState } from "react";
import UserCard from "./UserCard";
export default function TestAPI(){
    const[users,setUser]=useState([]);
    function getUsers(){
        const getData=async()=>{
            const response =await fetch(
                "https://jsonplaceholder.typicode.com/users",
            );
            const userss=await response.json();
            return userss;
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