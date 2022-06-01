import { Box } from '@mui/material'
import React from 'react'
import Logo from '../../Components/Logo'
import {css} from "@emotion/react"
import styled from '@emotion/styled'
import NavbarButton from '../../Components/Buttons/NavbarButton'
import SignUpButton from '../../Components/Buttons/SignUpButton'

function TopBar() {
  return (
    <TopBarContainer className="flex flex-row items-center " >
        <MBox  className="flex flex-row items-center justify-start" >
            <Logo/>
        </MBox>
        <MBox   className=" flex flex-row items-center justify-center" >
            <NavbarButton>
                sales reps
            </NavbarButton>
            <NavbarButton>
                companies
            </NavbarButton>
            <NavbarButton>
                pricing
            </NavbarButton>
            <NavbarButton>
                more
            </NavbarButton>
        </MBox>
        <MBox justifyContent={"flex-end"} className=" flex flex-row items-center" >
            <NavbarButton>
                login
            </NavbarButton>
            <SignUpButton style={{padding: "9px 24px"}} >
                Sign Up
            </SignUpButton>
        </MBox>
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
`

const MBox = styled(Box)`
    width: 30%;
`