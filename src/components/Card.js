import React,{useState} from 'react'

const Card = (props) => {
    console.log(props.title)
    const [counter ,setCounter] = useState(2)
    const sum =()=>{
        if(counter <3){
            setCounter(counter +1)
        }
    }
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{counter}</p>
        <button onClick={sum}>Increatment</button>
        {/* <button onClick={()=>setCounter(counter-1)}>Decerement</button> */}
    </div>
  )
}
export default Card