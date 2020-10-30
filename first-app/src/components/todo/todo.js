import React, { useState } from 'react'



export default function CreateTodolist  (){
        const [val,setVal]= useState("")
        let [arr, setArr]= useState([])        
        // arr=arr.push(val)
    return (
        <>
            <h1>To-Do List</h1>
            <input type="text" onChange={(e)=>setVal(e.target.value)}></input>
            <button onClick={()=>console.log("Button clicked", setArr)} >ADD</button>
        </>
    );
}