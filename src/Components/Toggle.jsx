import './Toggle.css'
import React,{useState} from 'react'
// import Image from "../assets/Images/dark.png" 
// import Image from "../assets/Images/light.png" 
const Toggle=()=>{
    
    const[toggle,setToggle]=useState(false);
    const onClickHandler=()=>{
        setToggle(!toggle)
        }
    return<>
    <div className={`${toggle? "Dark": "Light"}`}>
    <h1 className={`${toggle? "darkMode":"lightMode"}`}>{`${toggle? "Dark-Mode":"Light-Mode"}`}</h1>
    <div className="center">
        <input type="checkbox" onClick={onClickHandler}/>
    </div>
        
    </div>
    </>
}

export default Toggle