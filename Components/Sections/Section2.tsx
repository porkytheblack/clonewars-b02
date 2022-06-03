import styled from "@emotion/styled"
import { Box, Typography } from '@mui/material'
import Image from "next/image"
import React from 'react'
import SignUpButton from "../Buttons/SignUpButton"
import Company from "../Logo/company"

function Section2() {
  return (
    <CustomSectionBox className="flex flex-col items-end w-full justify-start" >
        <div className="flex w-1/2 HeaderTextLeft flex-row items-center justify-start">
            <Typography color="#918f8d"  variant="body1" fontFamily={`NeueMontreal, sans-serif`} fontSize={"14px"} margin="0px 32px 0px 0px" >
                SALES REPS
            </Typography>
            <div className="hr-div" ></div>
        </div>
        <div className="flex ContenetRight flex-col items-end justify-start">
            <Typography fontWeight={"medium"} fontSize={"72px"} variant="h1" fontFamily={`"NeueMontreal", sans-serif`} align="right" width="100%" >
                Uncapped
            </Typography>
            <Typography fontWeight={"medium"} fontSize={"72px"} variant="h1" fontFamily={`"NeueMontreal", sans-serif`} align="right" width="100%" >
                earning only for,
            </Typography>
            <Typography fontWeight={"500"} color="#d2d0fb" fontStyle={"italic"} fontSize={"72px"} align="left" fontFamily={`Tiempos-Regular, Georgia, sans-serif`} >
                the very best
            </Typography>
            <h4 className="TypographyContainer"  style={{  fontFamily:`NeueMontreal, sans-serif`,  color:"#918f8d", fontSize:"24px", fontWeight:"400", textAlign: "left", width: "55%" }} >
            Reps accepted to join SellX, have an entrepreneurial mindset, are resilient and are the best at what they do.
            </h4>
            <SignUpButton style={{padding: "12px 28px", marginTop: "48px", width: "258px"}} >
                Learn more - For Sales Reps
            </SignUpButton>
            <div className="flex flex-row Companies">
                <Company name="amazon" />
                <Company name="sap" style={{height: "40px"}} />
                <Company name="google" />
            </div>
        </div>
        <div className="flex SectionImage">
            <Image alt="asset_two" width={"584px"} height={"686px"} src={"/assets/images/image_asset_two.png"}/>
        </div>
        
    </CustomSectionBox>
  )
}

export default Section2

const CustomSectionBox = styled(Box)`
    padding: 100px;
    position: relative;
    .hr-div{
        height: 1px;
        width: 400px;
        background-color: #2a2928;
    }
    .HeaderTextLeft{
        margin-bottom: 72px;
    }
    .ContentRight{

    }
    .Companies{
        margin-top: 48px;
        display: flex;
        flex-direction: row;
        align-items: center;

    }
    .SectionImage{
        position: absolute !important;
        left: 20px;
        top: 10%;
    }
`