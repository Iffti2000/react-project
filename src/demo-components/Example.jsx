import { useRef, useState } from "react";
import FirstComponent from "./FirstComponent";

const Example = () => {

    let y = "GreatStack"
    let array = ["user1","user2","user3","user4"];
  
    let color = ""
  
    const [x,setx] = useState(0)
  
    const btnClick = () => {
       console.log("Clicked");
       setx(x+1);
       console.log(x);
    }
   
    const [text,setText] = useState([]);
    const inputRef = useRef(null)

  return (
    <div>
      <h1>{y}</h1>
      {array.map((user,index)=>{return <h2 key={index}>{user}</h2>})}
  

      {color==="red"?<h2>Red</h2>:<h2>Blue</h2>}

      <button onClick={() => {btnClick()}}>Click me</button>
      <FirstComponent data={x} fn={setx}/>

      <div>
        <input ref={inputRef} type="text" />
        <button onClick={()=>{setText([...text,inputRef.current.value])}}>Submit</button>
        {text.map((item,index)=>{return <h2 key={index}>{item}</h2>})}
      </div>
    </div>
  )
}

export default Example
