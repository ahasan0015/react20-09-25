import { Link } from "react-router-dom"
function Login() {
    return (
        <>
            <h1>Loging</h1>
            <label htmlFor="">Enter Your User Name</label> <br />
            <input type="text" className="form-control" /> <br />
            <label htmlFor="">Enter Your Password</label><br />
            <input type="password" className="form-control" /> <br /> <br />
            <Link to='/' className="btn btn-danger btn-rounded">Retun to Home Page</Link>
        </>
    )
}
export default Login