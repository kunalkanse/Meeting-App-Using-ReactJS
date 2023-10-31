// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


// function randomID(len) {
//   let result = '';
//   if (result) return result;
//   var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
//     maxPos = chars.length,
//     i;
//   len = len || 5;
//   for (i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   return result;
// }

// export function getUrlParams(
//   url = window.location.href
// ) {
//   let urlStr = url.split('?')[1];
//   return new URLSearchParams(urlStr);
// }

// export default function App() {
//       const roomID = getUrlParams().get('roomID') || randomID(5);
//       let myMeeting = async (element) => {
//      // generate Kit Token
//       const appID = 352230205;
//       const serverSecret = "de8ec634523f91f554c68371742b469e";
//       const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));


//      // Create instance object from Kit Token.
//       const zp = ZegoUIKitPrebuilt.create(kitToken);
//       // start the call
//       zp.joinRoom({
//         container: element,
//         sharedLinks: [
//           {
//             name: 'Personal link',
//             url:
//              window.location.protocol + '//' + 
//              window.location.host + window.location.pathname +
//               '?roomID=' +
//               roomID,
//           },
//         ],
//         scenario: {
//           mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
//         },
//       });


//   };

//   return (
//     <div
//       className="myCallContainer"
//       ref={myMeeting}
//       style={{ width: '100vw', height: '100vh' }}
//     ></div>
//   );
// }

//========================================================================================

// import {useState,useCallback} from "react"
// const App = ()=>{
//   const[count,setCount]=useState(0)
//   const min = useCallback(
//     ()=>{
//       setCount(count-1)
//     },
//     [count]
//   )
//   return(
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>+</button>
//       <button onClick={min}>-</button>
//     </div>
//   )
// }
// export default App

//========================================================================================


// import { useState,useMemo } from "react"
// const App = ()=>{
//   const[count,setCount]=useState(0)
//   const Power = ()=>{
//     return count**2
//   }
//   const memo = useMemo(()=>Power(count))
//   return(
//   <div>
//     <h1>Count:{count}</h1>
//     <h1>Power:{memo}</h1>
//     <button onClick={()=>setCount(count+1)}>+</button>
//   </div>
//   )
// }
// export default App


// import { useEffect,useRef,useState } from "react";
// const App = ()=>{
//   const[name,setName]=useState("")
//   const count = useRef(0)
//   useEffect(()=>{
//     return()=>{
//       count.current=count.current+1
//     }
//   },[name])
//   return(
//     <div>
//       <input type="text" onChange={(e)=>setName(e.target.value)} />
//       <h1>My Name is {name}</h1>
//       <h1>Count:{count.current}</h1>
//     </div>
//   )
// }
// export default App



// import {useRef} from "react"
// const App = ()=>{
//   const inputElement=useRef()
//   function
//   inputElement.current.focus()
// }
// return(
//   <div>
//     <input ref={inputElement}></input>
//     <button onClick={foc}>Focus</button>
//   </div>
// )
// }
// export default App

// import { useState, useRef } from 'react';

// function App() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const toggleVideo = () => {
//     if (videoRef.current.paused) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     } else {
//       videoRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Video Player</h1>
//       <video ref={videoRef} width="400">
//         <source src="https://cdn.pixabay.com/vimeo/803733100/couple-152798.mp4?width=640&hash=cc7e940c3ee76c343bbfc6ca531254aa858c0e03" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <button onClick={toggleVideo}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//     </div>
//   );
// }
// export default App;


// import NavBar from "./mayurresume/NavBar"

// const App = () => {
//   return (
//     <div className="div">
//       <NavBar></NavBar>
      
//     </div>
//   )
// }

// export default App



// import React from 'react'

// import Navbar from './Profile_task/Navbar'
// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   )
// }

// export default App

// import { useEffect,useState } from "react"
// const App =()=>{
//   const[value,setValues]=useState([]);
//   const[search,setSearch]=useState("")
//   useEffect(()=>{
//   fetch(`https://pixabay.com/api/?key=40363737-a4fa71fe08543de5dbb6bd4ef&q=${search}&image_type=photo`)  
//   .then(res=>res.json())
//   .then(d=>setValues(d.hits))
// },[value])
// return(
//   <div className="App">
//   <center><input type="text" onChange={(e)=>setSearch(e.target.value)}></input></center>
// {value.map((x)=>{
//   return(
//     <section key={x.id} className="secimg">
//       <img src={x.webformatURL} height={x.webformatHeight} width={x.webformatWidth}></img>
//     </section>
//   )
// })}
// </div>
// )
// }
// export default App


import { useEffect, useState } from 'react'
import Navbar from './New_folder/Navbar'

const App = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=40363756-160f89c7768a2a4e2b0888016&q=${search}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(d => setData(d.hits))
  }, [data])

  return (
    <div className="App">
      <Navbar />
      <center><input type="text" onChange={(e) => setSearch(e.target.value)}></input></center>
      {data.map((x) => {
        return (
          <section key={x.type} className="secimg">
            <img src={x.webformatURL} height={x.webformatHeight} width={x.webformatWidth}></img>
          </section>
        )
      })}
    </div>
  )
}

export default App