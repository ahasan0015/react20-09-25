import {Link} from "react-router-dom"
import PropsPage from "./PropsPage";

function Home(){
    return(
        <>
        <h1>Welcome to Homepage</h1>
        <PropsPage/>
        <Link to={"/"} className="btn btn-primary">Return to Home Page</Link>
        </>
        
    )

}
export default Home