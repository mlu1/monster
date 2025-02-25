import React,{useState} from 'react'
const GuestList:React.Fc = ()=>{
    const [name,setName] = useState('')
    return (
        <div>
            <h3>GuestList</h3>
            <input onChange ={(e)=>setName(e.target.value)}/>
            <button>Add Guest</button>
        </div>
    )
}
export default GuestList