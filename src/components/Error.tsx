import { Link } from "react-router-dom"

function Error() {
    return (
        <>
             <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center p-5 bg-white shadow rounded" style={{ maxWidth: "400px" }}>
        <h1 className="display-1 text-danger mb-3">404</h1>
        <h3 className="mb-4">Oops! Page Not Found</h3>
        <p className="mb-4 text-muted">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary btn-lg">
          Return to Home
        </Link>
      </div>
    </div>
        </>

    )
}

export default Error