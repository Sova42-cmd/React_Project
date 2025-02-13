
function Button(props: any) {
    return (
        <button onClick={() => console.log("Hello")}>{props.name}</button>
    )
}
export default Button