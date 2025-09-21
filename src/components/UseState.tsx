import Footer from '../layout/Footer.tsx';
import Header from '../layout/Header.tsx';
import { baselink as blink } from './Config.tsx';
import Demo from "./Config.tsx";
import { useEffect, useState } from "react";

export default function UseState() {
  let [like, setlike] = useState(10);
  // useEffect → React এর একটি হুক, যেটা দিয়ে আপনি side-effect (যেমন data load করা, console এ print করা, API call করা ইত্যাদি) কাজ করতে পারেন।
  useEffect(() => {
    console.log("UseState");

  }, [like]);
  return (
    <>
      <Header/>
      <div className='text-center'>
        {/* <h1 className='text-danger'>UseState</h1> */}
        <div>UseState</div>


        {/* {blink.link} */}
        {/* <h3>{Demo}</h3> */}
        <h2 className='text-danger'>Impression: {like}</h2>
        <button className='btn btn-rounded btn-primary' onClick={() => setlike(like + 10)}>💖</button>
        {like > 0 &&
          <button className='btn btn-rounded btn-primary' onClick={() => setlike(like - 10)}>🥺</button>
        }
      </div>
      <Footer/>

    </>
  )
}
