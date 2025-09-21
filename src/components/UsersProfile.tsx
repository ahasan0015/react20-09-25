import { useParams } from "react-router-dom";
import data from "../data.json"




function UsersProfile() {
  let params = useParams<{id:string}>();

  // console.log([params]);
  const user = data.find((item)=> item.id === Number(params.id));
  console.log(user);
  return (
    <>
    <h1>UsersProfile {params.id}</h1>
    <div> <b>Name:</b>{user?.name}</div>
    <div> <b>Name:</b>{user?.email}</div>
    <div> <b>Name:</b>{user?.round}</div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum labore fugit magni tempore quasi temporibus corporis perferendis quia magnam at. Eum vitae dolorum saepe neque sint fugiat est non dolor.</p>
    </>
    
  )
}

export default UsersProfile