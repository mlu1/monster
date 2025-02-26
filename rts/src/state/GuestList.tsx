import React,{useState} from 'react'

export const GuestList:React.Fc = ()=>{
    const [name,setName] = useState('');
    const [guests,setGuests] =useState<string[]>([]);

    const onClick = ()=>{
        setName('')
        setGuests([...guests,name])
    }
    return (
        <div>
            <h3>GuestList</h3>
            <ul>
                {
                    guests.map((guest)=>(
                    <li key={guest}>{guest}</li>
                    ))
                }
            </ul>
            <input value={name} onChange ={(e)=>setName(e.target.value)}/>
            <button onClick={onClick}>Add Guest</button>
        </div>
    )
}
