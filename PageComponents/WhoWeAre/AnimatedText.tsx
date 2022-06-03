import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, {useRef, useState, useEffect, useContext} from 'react'
import {useInView} from "react-intersection-observer"
import { ScrollContext } from '../../helpers/scroll-observer'
import useWindowSize from '../../helpers/useWindowSize'

function AnimatedText({children, pos}: {children: string, pos: number}) {
    const [width, set_width] = useState<string>("100%")
    const {scrollY} = useContext(ScrollContext)
    const ref  = useRef<HTMLDivElement>(null)
    const {width: w, height: h} = useWindowSize()
 
   useEffect(()=>{
    const {current} = ref
    if(typeof current !== "undefined" && current !== null && typeof h !== "undefined" ){
        // var _w = (current.getBoundingClientRect().top ) / (h)
        // set_width(`${_w * 100}%`)
        var pos_in_box = h*0.5 - current.getBoundingClientRect().top
        var n = h*0.7 - h*0.5
        var _w = pos_in_box / n
        set_width(`${100 - (_w * 100)}%`)
    }

   }, [, scrollY])

  return (
    <AnimatedTextBox  ref={ref} className="flex flex-row items-center justify-start w-full" >
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
    right: 0;
    background-color: rgba(0, 0, 0, 0.75);
    width: ${props => props.width};
    height: 100%;
    z-index: 1;
    transition: width 2s linear;
`