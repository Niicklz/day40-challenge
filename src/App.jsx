import React, { useState } from 'react'
import { Box } from './components/Box/Box'
import "./styles.css"
export const App = () => {
    const [active, setActive] = useState(false)
  return (
    <div className={`container ${active? "expand": ""}`}>
        <button onClick={()=> setActive((active)=> !active)}>Magic</button>
        <Box x="0px" y="0px"/>
        <Box x="-125px" y="0px"/>
        <Box x="-250px" y="0px"/>
        <Box x="-376px" y="0px"/>
        <Box x="0px" y="-125px"/>
        <Box x="-125px" y="-125px"/>
        <Box x="-250px" y="-125px"/>
        <Box x="-375px" y="-125px"/>
        <Box x="0px" y="-250px"/>
        <Box x="-125px" y="-250px"/>
        <Box x="-250px" y="-250px"/>
        <Box x="-375px" y="-250px"/>
        <Box x="0px" y="-375px"/>
        <Box x="-125px" y="-375px"/>
        <Box x="-250px" y="-375px"/>
        <Box x="-375px" y="-375px"/>
    </div>
  )
}
