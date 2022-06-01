import React, {ReactNode} from 'react'
import styled from "@emotion/styled"
import {Typography} from "@mui/material"
import HeroFigures from './HeroFigures'

function Block({children, figures, range}: {children: string , figures: string | number , range: string}) {
  return (
    <BlockContainer className="flex flex-col items-center justify-start space-y-2" >
        <HeroFigures num={figures} range={range} />
        <Typography fontSize="16px" fontWeight={"400"} color="#918f8d" align='center' width={"200px"} fontFamily={`NeueMontreal, sans-serif`} >
            {children}
        </Typography>
        
    </BlockContainer>
  )
}

export default Block

const BlockContainer = styled('div')`

`