import { useContext } from "react";
import { mycontext } from "../App";
export default function B()
{
    var data =useContext(mycontext)
    return(

        <>
            <h1>in b Component</h1>
            <h1>name:{data.name}</h1>
            <h1>Age:{data.age}</h1>
        </>
    )
}