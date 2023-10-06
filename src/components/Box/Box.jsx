import React from 'react'
import "./Box.css"

export const Box = ({x,y}) => {
  return (
    <div className='box-container' style={{backgroundPosition:`${x} ${y}`}}>
       
    </div>
  )
}
