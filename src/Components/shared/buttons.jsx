import React from 'react'

export default function Buttons({color, bg, width, text}) {
    const but = {
        backgroundColor: bg,
        color:color, 
        height:'55px',
        width:width, 
        borderRadius:'10px'
    }
  return (
    <div >
    <button className='' style={but} >{text}</button>
    
    </div>
  )
}
