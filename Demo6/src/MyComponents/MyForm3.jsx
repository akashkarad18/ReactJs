import { Component } from "react";
import './mystyle.css';

class MyForm3 extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            email: ''
        };
    }

    allHandler = (e) => {
        var v = e.target.value;
        var n = e.target.name;

        this.setState({
            [n]: v
        });
    }

    render() {
        return (
            <>
                <div className="form-container">
                    <h1 style={{ textAlign: 'center', color: 'black',fontFamily:'serif' }}>Registration Form</h1>
                    <form action="" className="register-form" onSubmit={(e) => { e.preventDefault() }}>
                        <table>
                            <tr>
                                <td>
                                    <input name="fname" type="text" value={this.state.fname} placeholder="First Name" className="form-field" onChange={this.allHandler} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input name="lname" type="text" value={this.state.lname} placeholder="Last Name" className="form-field" onChange={this.allHandler} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input name="email" type="email" value={this.state.email} placeholder="Email" className="form-field" onChange={this.allHandler} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'3'}>
                                    <button className="form-field" type="submit" style={{ width: '332px' }}>Register</button>
                                </td>
                            </tr>
                        </table>
                    </form>

                </div>
                

            </>
        );
    }
}

export default MyForm3;
