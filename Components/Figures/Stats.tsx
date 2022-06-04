import React from 'react'
import {Typography} from "@mui/material"

function Stats({stat, desc}: {stat: string, desc: string}) {
  return (
    <div className="flex flex-col items-center justify-center">
        <Typography fontWeight={"500"} color="white" fontStyle={"normal"} className="big-text" fontFamily={`Tiempos-Regular, Georgia, sans-serif`} >
            {stat}
        </Typography>
        <Typography fontSize="14px" fontWeight={"400"} color="#918f8d" align='center' width={"200px"} fontFamily={`NeueMontreal, sans-serif`} >
            {desc}
        </Typography>
    </div>
  )
}

export default Stats