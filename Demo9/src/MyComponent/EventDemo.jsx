import { Component } from "react";


export default class EventDemo extends Component
{
    constructor()
    {
        super()
        this.state={count:0};
    }
    x=()=>{
            this.setState({
            count:this.state.count+1
        })
    }
    y=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    render()
    {
        return(
            <>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.x}>Increase</button>
                <button onClick={this.y}>Decrease</button>

                <div onMouseEnter={this.x} style={{border:'1px solid black',padding:'10px',marginRight:'1200px'}}>
                    +++
                </div>
                <div onMouseEnter={this.y} style={{border:'1px solid black',padding:'10px',marginRight:'1200px'}} >
                    ---
                </div>
            </>
        )
    }
}