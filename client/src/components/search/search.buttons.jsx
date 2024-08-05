import { ArrowLeft12Regular, History20Filled, Home20Filled } from "@fluentui/react-icons"
import { useNavigate } from "react-router-dom"

const Back = () => {
    const goBack = ()=>{
        window.history.back()
    }

    return (
        <button onClick={goBack} class="circle extra transparent">
            <i className="extra"><ArrowLeft12Regular /></i>
        </button>
    )
}


const Clear = () => {
   
    return (
        <button  class="circle extra transparent">
            <i className="extra"><History20Filled /></i>
        </button>
    )
}

const Home = () => {
   const navigate = useNavigate()
   const goHome = () => {
    navigate("/home")
   }
    return (
        <button onClick={goHome}  class="circle extra transparent">
            <i className="extra"><Home20Filled /></i>
        </button>
    )
}



export default {Back, Clear, Home}