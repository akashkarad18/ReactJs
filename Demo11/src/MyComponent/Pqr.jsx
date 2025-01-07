import { useState } from "react"

export default function Pqr()
{
    const[count,setCount] =useState(0)

    const x=()=>{
        setCount(count+1)

    }
    const y=()=>{
        setCount(count-1)

    }
    return(
        <>
            <h1>Count{count}</h1>
            <button onClick={x}>Increase</button>
            <button onClick={y}>Decrease</button>
        </>

    )
    
        
}