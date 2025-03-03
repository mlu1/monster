import React from 'react'
const EventComponent:React.FC = () =>{
    
    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
    }

    const onDragStart = (e:React.ChangeEvent<HTMLDivElement>)=>{
        console.log('im being dragged')
    }
    return(
        <div>
            <input onChange={onChange}/>
            <div draggable onDragStart={onDragStart}>Drag Me</div>
        </div>
    )
}
export default EventComponent