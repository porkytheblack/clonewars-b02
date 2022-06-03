import React from 'react'
import styled from "@emotion/styled"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { KeyboardArrowRight } from '@mui/icons-material';

function DirectionButton({direction, onClick}:{direction: "left" | "right", onClick?: () => void}) {
  return (
    <CustomContainerButton onClick={onClick} className="flex flex-col items-center justify-center"  >
        {direction === "left" ? <KeyboardArrowLeftIcon  className="w-6 h-6" /> : <KeyboardArrowRight className="w-6 h-6" />}
    </CustomContainerButton>
  )
}

export default DirectionButton

const CustomContainerButton = styled('button')`
    border: none;
    outline: none;
    background: white;
    color: black;
    cursor: pointer;
    width: 60px;
    height: 60px;
    margin: 0px 10px;
    border-radius: 30px;
    :hover{
        background: black;
        border: 2px solid white;
        color: white;
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`