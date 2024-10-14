import React from 'react'

export default function Buttons({color, bg, width, text, handle}) {
  
    const but = {
        backgroundColor: bg,
        color:color, 
        height:'55px',
        width:width, 
        borderRadius:'10px'
    }
  return (
    <div >
    <button onClick={handle} className='' style={but} >{text}</button>
    
    </div>
  )
}
