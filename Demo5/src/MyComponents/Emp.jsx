export default function Emp(props)
{
    var id = props.i;
    var name= props.n;
    var salary=props.s;
    return(
        <>
            <div style={{border:'2px solid black',marginRight:'600px',padding:'10px'}}>
                <h1>Employee ID:{id}</h1>
                <h1>Employee Name:{name}</h1>
                <h1>Employee Salary:{salary}</h1>
            </div>
        </>
    )
}