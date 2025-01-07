import { Component } from "react";

class MyForm1 extends Component
{
    constructor()
    {
        super()
        this.myref=React.createRef()
    }
    x=()=>{
        console.log(this.myref.current.value)

        console.log(this.myref.current.name)
    }
    render()
    {
        return(
            <>
                <input type="text" name="uname" ref={this.myref} onChange={this.x}/>
                <button>Click Me</button>
            </>
        )

    }

}
export default MyForm1;