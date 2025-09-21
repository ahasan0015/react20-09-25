export default function PropsChild(props:any){
    return(
        <>
        <div className="card">
            <h5 className="card-header">{props.name}</h5>
            <div className="card-body">
                <h6>Name: {props.name}</h6>
                <h6>Email: {props.email}</h6>
                <h6>Round: {props.round}</h6>
            </div>
            
        </div>
        </>
    )
}
// interface Users{
//     name?:string;
//     email?:string;
//     round?:number;
// }

PropsChild.defaultProps ={
    name: "IsDB Trainee",
    email: "Email Not found",
    round: 65
}