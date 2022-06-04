import styled from '@emotion/styled'
import { ArrowUpward } from '@mui/icons-material'
import { CircularProgress, IconButton } from '@mui/material'
import React, { useContext } from 'react'
import { ScrollContext } from '../../helpers/scroll-observer'

function ScrollTracker() {
    const {percentage} = useContext(ScrollContext)

    const scrollUp = () =>{
        window.scrollTo(0, 0)
    }

  return (
    <CustomContainer>
        <CircularProgress className='CircularProgress' variant="determinate"   value={percentage*100} />
        <IconButton onClick={scrollUp} className="CustomIconButton" >
            <ArrowUpward  />
        </IconButton>
    </CustomContainer>
  )
}

export default ScrollTracker

const CustomContainer = styled('div')`
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 30;
    display: flex;
    flex-direction: column;;
    alignItems: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    .CircularProgress{
        width: 40px !important;
        height: 40px !important;
        color: white;
    }
    .CustomIconButton {
        position: absolute;
        color: white;
        fontSize: 24px;
        z-index: 35;
        top: 0px;
        left: 0px;
        background: transparent;
        width: 40px;
        height: 40px;
    }
`