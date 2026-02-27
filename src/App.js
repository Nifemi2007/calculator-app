import Button from "./components/button"
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { createContext, useState, useRef, useEffect  } from "react"
import button from "./components/button";
export const GlobalStateContext = createContext()
function App() {
   const [value, setValue] = useState("")
   const [dark, setDark] = useState(false)
   const handleDark = () =>{
    setDark(()=>!dark)
   }

   const inputValue = useRef()
   const prevValue = useRef("")
   useEffect(()=>{
    inputValue.current = value
   },[])

   const handlevalue = (inp) =>{
    if(typeof(inp) === 'number') {
          setValue(prev => prev + inp)
    } else {
      setValue(prev => prev + " " + inp + " ")
    }
   }

   const clearAll = () =>{
    setValue("")
   }

   const deletePrev = () => {
    setValue(prev => prev.slice(0, -1))
   }
  //  const handleClick = (val) =>{
  //   setValue(val)
  //  }
  // const input = useRef()
  // const screenInput = (txt) =>{
  //   input.current = txt
  // }
    const buttonText = [1, 2, 3, "/",4, 5, 6, "x", 7, 8, 9, "-", 0, ".", "=", "+"]

  return (
   
    <GlobalStateContext.Provider value={{dark}}>
      <div className="app"  style={{backgroundColor:dark ? "#252525":""}}>


  <main style={{color:dark? "#ffac09":"",backgroundColor:dark ? "#060606":""}}> 

    {/* display screen */}
<div className="screen" style={dark ? {backgroundColor: "#252525", color:"white"}:{}}>
      <input  value={value} ref={inputValue} readOnly style={{color:dark ? "white":""}}/>

  </div>    
   

<div className="upper_btn">
 {dark ?  <FaToggleOn className="icon" onClick={handleDark}></FaToggleOn>
 : <FaToggleOff onClick={handleDark} className="icon"></FaToggleOff>}

 <div className="special_btn">
  <button style={{color:dark? "#ffac09":"",backgroundColor:dark ? "#252525":""}} onClick={() => deletePrev()}>del</button>
  <button style={{color:dark? "#ffac09":"",backgroundColor:dark ? "#252525":""}} onClick={() => clearAll()}>clear</button>

 </div>
</div>


    <div className="buttons" >

      {buttonText.map((btn) => (
        <Button
        key={btn}
        text={btn}
        func ={handlevalue}
        />
      ))}
      {/* <Button  text={1}  />
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
 </GlobalStateContext.Provider>
  
  )
    
}

export default App