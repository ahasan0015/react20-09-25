import { SocialLink } from "./SocailLink";
import Icon form "./assets/react.svg"
// import "./Card.css"
const card = {
    border: "5px solid red",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px",
}

export function Card() {
    return (
        <div style={card} id="card">
            <img src={Icon} alt="" />
            <h3>User Name</h3>
            <h5>Designation</h5>
            <SocialLink />
        </div>
    )
}