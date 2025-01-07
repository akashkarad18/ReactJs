import { Component } from "react";

class Std extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <>
                <div style={{margin:'20px',border:'1px Solid red',padding:'20px'}}>
                    <h1>Student Roll:{this.props.r}</h1>
                    <h1>Student Name:{this.props.n}</h1>
                    <h1>Student Mark:{this.props.m}</h1>
                </div>
            </>
        )
    }                       
}
export default Std;