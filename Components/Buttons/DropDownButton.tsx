import styled from '@emotion/styled'
import { ArrowDropUp, KeyboardArrowDown } from '@mui/icons-material'
import { ButtonBase, Link, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import {keyframes} from "@emotion/react"

function DropDownButton() {
    const [hover, set_hover] = useState<boolean>(false)


  return (
    <CustomButton onMouseEnter={()=>{set_hover(true)}} onMouseLeave={()=>{set_hover(false)}} className="flex flex-row items-center justify-center p-[20px_16px] border-none outline-none bg-transparent cursor-pointer"  >
        <Link fontFamily={"NeueMontreal, sans-serif"} underline='none' variant='body1' className="uppercase" fontSize={"12px"} color={hover? "#cbc4b7" : "secondary"} >
            More
        </Link>
        <KeyboardArrowDown style={{color: hover? "#cbc4b7" : "white", fontSize: "18px", marginLeft: "10px"}}   />
        {hover && <MenuContainer vis={hover} className="flex flex-col items-center justify-start" >
            <ArrowDropUp style={{position: "absolute", top: "-29px", left: "40%", color: "#151414",fontSize: "50px"}} />
            <CustomMenuItem>
                <Typography fontFamily={"NeueMontreal, sans-serif"} variant='body1' className="uppercase" fontSize={"12px"} color="white" >
                    Vetting Process
                </Typography>
            </CustomMenuItem>
            <CustomMenuItem>
                <Typography fontFamily={"NeueMontreal, sans-serif"} variant='body1' className="uppercase" fontSize={"12px"} color="white" >
                    Blog
                </Typography>
            </CustomMenuItem>
            <CustomMenuItem>
                <Typography fontFamily={"NeueMontreal, sans-serif"} variant='body1' className="uppercase" fontSize={"12px"} color="white" >
                    News Room
                </Typography>
            </CustomMenuItem>
            <Button className="cursor-pointer" >
                <Typography fontFamily={"NeueMontreal, sans-serif"} variant='body1' className="uppercase" fontSize={"12px"} >
                    Sign up to join
                </Typography>
            </Button>
        </MenuContainer>}
    </CustomButton>
  )
}

export default DropDownButton

const animateButton = keyframes`
     0% {
        margin-left: -100%;
        opacity: 0;
     }
     %98% {
         opacity: 0;
     }
     100%{
        margin-left: 0%;
        opacity: 1;
     }
`


const MenuContainer = styled('div')<{vis: boolean}>`
    position: absolute;
    visibility: ${props => props.vis ? "visible" : "hidden"};
    width: 300px;
    height: auto;
    padding: 30px;
    background: #151414;
    top: 100%;
    border-radius: 10px;
`


const CustomButton = styled('div')`
  display: flex;
  flex-direction: row; 
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`

const CustomMenuItem = styled(MenuItem)`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  animation: ${animateButton} .3s linear;
`

const Button  = styled(ButtonBase)`
  width: 100%;
  padding: 20px 40px;
  margin-top: 20px;
  border: 1px solid #8a88ad;
  color: black !important;
  background-color: #8a88ad !important;
  cursor: pointer;
  :focus-within{
    background-color: transparent !important;
    color: #8a88ad !important;
  }
  :hover{
    background-color: transparent !important;
    color: #8a88ad !important;
    }
`

