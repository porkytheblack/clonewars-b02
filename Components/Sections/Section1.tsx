import styled from "@emotion/styled"
import { Box, Typography } from '@mui/material'
import Image from "next/image"
import React from 'react'
import SignUpButton from "../Buttons/SignUpButton"
import Company from "../Logo/company"

function Section1() {
  return (
    <CustomSectionBox className="flex flex-col items-start w-full justify-start" >
        <div className="flex HeaderTextLeft flex-row items-center justify-start">
            <Typography color="#918f8d"  variant="body1" fontFamily={`NeueMontreal, sans-serif`} fontSize={"14px"} margin="0px 32px 0px 0px" >
                COMPANIES
            </Typography>
            <div className="hr-div" ></div>
        </div>
        <div className="flex ContenetRight flex-col items-start justify-start">
            <Typography fontWeight={"medium"} fontSize={"72px"} variant="h1" fontFamily={`"NeueMontreal", sans-serif`} align="left" width="100%" >
                Maximize your potential,
            </Typography>
            <Typography fontWeight={"medium"} fontSize={"72px"} variant="h1" fontFamily={`"NeueMontreal", sans-serif`} align="left" width="100%" >
                reduce your costs,
            </Typography>
            <Typography fontWeight={"500"} color="#cbc4b7" fontStyle={"italic"} fontSize={"72px"} align="left" fontFamily={`Tiempos-Regular, Georgia, sans-serif`} >
                grow revenue
            </Typography>
            <h4 className="TypographyContainer"  style={{  fontFamily:`NeueMontreal, sans-serif`,  color:"#918f8d", fontSize:"24px", fontWeight:"400", textAlign: "left", width: "55%" }} >
                A powerful new sales platform that lets you launch a sales team at a push of a button.
            </h4>
            <SignUpButton style={{padding: "12px 28px", marginTop: "48px", width: "258px"}} >
                Learn more - For Companies
            </SignUpButton>
            <div className="flex flex-row Companies">
                <Company name="swimply" />
                <Company name="deel" />
                <Company name="sunday" />
            </div>
        </div>
        <div className="flex SectionImage">
            <Image width={"671px"} height={"689px"} alt="asset_one" src={"/assets/images/image_asset_one.png"}/>
        </div>
        
    </CustomSectionBox>
  )
}

export default Section1

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
        right: 0px;
        top: 20%;
    }
`