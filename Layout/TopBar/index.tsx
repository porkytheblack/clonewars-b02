import { Box, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Logo from '../../Components/Logo'
import {css} from "@emotion/react"
import styled from '@emotion/styled'
import NavbarButton from '../../Components/Buttons/NavbarButton'
import SignUpButton from '../../Components/Buttons/SignUpButton'
import DropDownButton from '../../Components/Buttons/DropDownButton'
import useWindowSize from '../../helpers/useWindowSize'
import {Menu} from "@mui/icons-material"
import MobileDropDown from '../../Components/Buttons/MobileDropdown'

function TopBar() {
    const [mobile, setMobile] = useState<boolean>(false)
    const [dropdown, setDropdown] = useState<boolean>(false)

    const handleDropdown = () => {
        setDropdown(!dropdown)  
    }

    const {width: w, height: h} = useWindowSize()

    useEffect(()=>{
        if(typeof w !== "undefined"){
            setMobile(w < 768)
        }
    }, [, w, h])

  return (
    <TopBarContainer className="flex flex-row items-center " >
        <MBox  className="flex flex-row items-center justify-start" >
            <Logo/>
        </MBox>
        {!mobile && <MBox   className=" flex flex-row items-center justify-center" >
            <NavbarButton>
                sales reps
            </NavbarButton>
            <NavbarButton>
                companies
            </NavbarButton>
            <NavbarButton>
                pricing
            </NavbarButton>
            <DropDownButton/>
        </MBox>}
        <MBox justifyContent={"flex-end"} className=" flex flex-row items-center" >
            {!mobile && <NavbarButton>
                login
            </NavbarButton>}
            <SignUpButton style={{padding: "9px 24px"}} >
                Sign Up
            </SignUpButton>
            {mobile && <SquareIconButton onClick={handleDropdown} >
                        <Menu className="icon" />
                </SquareIconButton>}
        </MBox>
        {dropdown && <DropDownMenu>
            <NavbarButton style={{width: "100%", height: "40px;"}} alignment="left" >
                sales reps
            </NavbarButton>
            <NavbarButton style={{width: "100%", height: "40px;"}} alignment="left" >
                companies
            </NavbarButton>
            <NavbarButton style={{width: "100%", height: "40px;"}} alignment="left" >
                pricing
            </NavbarButton>
            <MobileDropDown/>
        </DropDownMenu>}
        
    </TopBarContainer>
  )
}

export default TopBar

const TopBarContainer = styled(Box)`
    background-color: rgba(0, 0, 0, 0.56);
    width: 100%;
    padding: 16px 40px;
    backdrop-filter: blur(12px);
    position: fixed;
    justify-content: space-between;
    z-index: 20;
    .icon{
        fontSize: 24px;
        color: white;
    }
`

const MBox = styled(Box)`
    width: 30%;
    @media (max-width: 768px) {
        width: 50%;
    }
`

const SquareIconButton = styled(IconButton)`
    padding: 5px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1px;
    margin-left: 20px;
`

const DropDownMenu = styled('div')`
    position: absolute;
    width: 100vw;
    background-color: #151414;
    top: 100%;
    left: 0px;
`