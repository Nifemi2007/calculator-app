import { useContext } from "react"
import { GlobalStateContext } from "../App"

function Button({text, func}) {
    const {dark} = useContext(GlobalStateContext)
    return <button onClick={() => func(text)} style={dark ? {color: "orange",backgroundColor:  "#252525"}: {}}>
        <p>{text}</p>
    </button>
}

export default Button