import { useState, useEffect } from "react";

function Hello(){
    // function byFn(){
    //     console.log("bye :(");
    // }
    // function hiFn(){
    //     console.log("created :)");
    //     return byFn;
    // }
    useEffect(function (){
        console.log("hi :)");
        return () => console.log("bye :(");
    },[]);
        //return () => console.log("destroyed :(");
        //윗줄: cleanup function => component가 destroy될 때
    return <h1>Hello</h1>;
}

function App() {
  //const[] = useState(false);
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
        {showing?<Hello/>:null}
      <button onClick={onClick}>
      {showing ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;
