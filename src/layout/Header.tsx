import {Link} from "react-router-dom"


export default function Header(){
    return(
        <>
        <nav>
            {/* <a href="">Home</a> */}
            <Link to="/like">Home</Link>
            <span> | </span>
            <Link to="/">About</Link>
            <span> | </span>
            <Link to="pops"> Popspage</Link>
            <span> | </span><span></span>
            {/* <a href="">Contact</a> */}
            <Link to="users">Users</Link>
            <span> | </span>
        </nav>
        
        <Link to={"/login"} className="btn btn-primary">Login</Link>
        
        </>

    );
}