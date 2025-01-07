import { Link } from "react-router-dom"
import '../CSS/styles.css'
function MyNav()
{
    return(
        <>
            <nav className="form-container">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/aboutpage"}>About</Link></li>
                    <li><Link to={"/contactpage"}>Contact</Link></li>
                </ul>
                
            </nav>
        </>
        
    )
}
export default MyNav;

                