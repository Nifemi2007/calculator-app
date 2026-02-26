import Button from "./components/button"
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import {useState,  } from "react"
import button from "./components/button";
function App() {
   const [value, setValue] = useState("")
   const [dark, setDark] = useState(false)
   const handleDark = () =>{
    setDark(!dark)
   }
  //  const handleClick = (val) =>{
  //   setValue(val)
  //  }
  // const input = useRef()
  // const screenInput = (txt) =>{
  //   input.current = txt
  // }
        const buttonText = ["1", "2", "3", "/","4", "5", "6", "x", "7", "8", "9", "-", "0", ".", "=", "+"]

  return <div className="app"  style={{backgroundColor:dark ? "#252525":""}}>


  <main style={{color:dark? "#ffac09":"",backgroundColor:dark ? "#060606":""}}> 
    <h2 className="screen" style={{backgroundColor:dark ? "#252525":""}}>
    {value}
    
    </h2>
    {dark ?  <FaToggleOn className="icon" onClick={handleDark}></FaToggleOn>
 : <FaToggleOff onClick={handleDark} className="icon"></FaToggleOff>}
    <div className="buttons" >
      {buttonText.map((btn) => (
        <Button
        key={btn}
        text={btn}
        dark={dark}
        />
      ))}
      {/* <Button  dark={dark} text={1} onClick={()=>setValue("1")} />
      <Button text={2} />
      <Button text={3} />
      <Button text={"/"} />
      <Button text={4} />
      <Button text={5} />
      <Button text={6} />
      <Button text={"x"} />
      <Button text={7} />
      <Button text={8} />
      <Button text={9} />
      <Button text={"-"} />
      <Button text={0} />
      <Button text={"."} />
      <Button text={"="} />
      <Button text={"+"} /> */}


    </div>
  </main>

  </div>
}

export default App