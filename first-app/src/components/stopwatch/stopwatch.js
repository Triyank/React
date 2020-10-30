import React, { useState } from 'react'

export default function createStopwatch (){

    const [hh, setHH]= useState(0)
    const [mm, setmm]= useState(0)
    const [ss, setss]= useState(0)

    const [time, setTime] = useState(0)
    return (
        <>
            <h1>StopWatch</h1>
            <h3>{time}</h3>
            <button onClick={(e)=>(setTime  )}></button>
        </>
    )
}