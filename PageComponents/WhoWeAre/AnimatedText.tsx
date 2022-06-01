import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, {useRef, useState, useEffect, useContext} from 'react'

function AnimatedText({children}: {children: string}) {
    const refContainer = useRef<HTMLDivElement>(null)
    const [width, set_width] = useState<string>("100%")
    const {current} = refContainer
  return (
    <AnimatedTextBox ref={refContainer} className="flex flex-row items-center justify-start w-full" >
        <Typography fontFamily={`NeueMontreal, sans-serif`} fontSize={"72px"} align="left" fontWeight="medium" width="100%" >
            {children}
        </Typography>
        <BoxMask width={width} />
    </AnimatedTextBox>
  )
}

export default AnimatedText

const AnimatedTextBox  = styled('div')`
    position: relative;
`
const BoxMask = styled(Box)<{width: string }>`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    width: ${props => props.width};
    height: 100%;
    z-index: 1;
    transition: width 0.5s linear;
`