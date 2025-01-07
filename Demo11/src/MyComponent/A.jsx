import B from "./B";
export default function A(props)
{
    var s = props.name;

    return(
        <>
            <B name={s}></B>
        </>
    )
}