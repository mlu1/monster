import React from 'react'
import { Child } from './Child'
export const Parent =()=>{
    const color = 'white'
    return (
        <Child color={color} onClick={()=>console.log('click me')}/>
    )   
}