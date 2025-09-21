// import Footer from "../layout/Footer"
// import Header from "../layout/Header"
import users from "../data.json";
import { Link } from "react-router-dom";

function Users() {
    return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <Link to={`/user/${item.id}`}>{item.email}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Users;