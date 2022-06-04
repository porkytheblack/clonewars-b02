import styled from '@emotion/styled'
import React from 'react'
import {Typography} from "@mui/material"

function HeroFigures({num, range}:{num:number | string, range:string}) {
  return (
    <TextContainer className="flex flex-row items-center justify-center" >
        <Typography variant="h6" fontFamily={`Tiempos-Bold`} className="text60" >
            $
        </Typography>
        <Typography variant="h6" fontFamily={`Tiempos-Bold`} className="text60" >
            {num}
        </Typography>
        <Typography variant="h6" fontFamily={`Tiempos-Bold`} className="text60" >
            {range}
        </Typography>
    </TextContainer>
  )

}

export default HeroFigures

const TextContainer = styled('div')`

`