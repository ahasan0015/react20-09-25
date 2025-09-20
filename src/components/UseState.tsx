import {baselink as blink} from './Config.tsx';
import Demo from "./Config.tsx";
import {useState} from "react";

export default function UseState() {
    let [like, setlike] = useState(10);
  return (
   <>
    <div className='text-center'>
        {/* <h1 className='text-danger'>UseState</h1> */}
        
    
    {/* {blink.link} */}
    {/* <h3>{Demo}</h3> */}
    <h2 className='text-danger'>Impression: {like}</h2>
    <button className='btn btn-rounded btn-primary' onClick={() => setlike(like + 10)}>💖</button>
    {like > 0 &&
    <button className='btn btn-rounded btn-primary' onClick={() => setlike(like - 10)}>🥺</button>
    }
    </div>
    
   </>
  )
}
