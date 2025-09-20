import PropsChild from "./PropsChild"
import "./Card.css"


function PropsPage() {
    // const User1 = { name: "John", age: 30, address: " New Work" }
    // const User2 = { name: "Sohel", age: 30, address: "Malibagh", email:"sohel@gmail.com", round:65}
    return (
        <div className="container">
            <h1>PropsPage</h1>
            <div className="row g-3">
                <div className="col-auto">
                    <PropsChild
                        name="Tanjila"
                        email="Tanjila@com"
                        round={65}
                    />
                </div>
                <div className="col-auto">
                    <PropsChild
                        name="Roxy"
                        email="Roxy@gmail.com"
                        round={65}
                    />
                </div>
            </div>
        </div>


    )
}
export default PropsPage