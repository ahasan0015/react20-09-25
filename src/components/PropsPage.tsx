import PropsChild from "./PropsChild"
import "./card/Card.css"
import users from "../data.json"


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
            <h2>Loop 2</h2>
            <div className="row g-3">{
                users.map((item) =>
                <div key={ item.id } className="col-lg-4">
                    {/* {<PropsChild {...item} />} */}
                <PropsChild name={item.name}round={item.round}email={item.email}/>
                </div>
                )
                }

            </div>
        </div>



    )
}
export default PropsPage