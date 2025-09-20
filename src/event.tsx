function Event(){

    const handelClick = () => {
        alert("Hello")
    }
    return(
        <>
        <h1>Event</h1>
        {/* {<button onClick={alert() =>alert("Hello")</>}>Click</button>} */}
        <button onClick={handelClick}>Click Me</button>
        </>
    )
}
export default Event