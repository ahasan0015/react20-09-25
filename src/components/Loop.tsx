import users from "../data.json";
function Loop(){
    return(
       <>
       <div>
            <h1>Loop</h1>
        </div>
        {/* {console.log(users)} */}
        <table className="table table-striped table-bordered" >
        <thead className="table-primary">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Round</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {
                // users.map((item)=>{
                //     return(
                //         <tr>
                //             <th>{item.id}</th>
                //             <th>{item.name}</th>
                //             <th>{item.round}</th>
                //             <th>{item.email}</th>
                //         </tr>
                //     )
                // })
                users.map((item)=>
                    (
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <th>{item.name}</th>
                            <th>{item.round}</th>
                            <th>{item.email}</th>
                        </tr>
                    )
                )
            }
        </tbody>
       </table>
       </> 
       
    )
}
export default Loop;