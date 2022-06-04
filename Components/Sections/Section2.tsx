import styled from "@emotion/styled"
import { ArrowForward } from "@mui/icons-material"
import { Box, Typography } from '@mui/material'
import Image from "next/image"
import React from 'react'
import IconLeft from "../Buttons/IconLeft"
import SignUpButton from "../Buttons/SignUpButton"
import Company from "../Logo/company"

function Section2() {
  return (
    <CustomSectionBox className="flex flex-col items-start w-full justify-start" >
        <div className="flex w-full HeaderTextLeft flex-row items-center justify-start">
        <Typography color="#918f8d"   variant="body1" fontFamily={`NeueMontreal, sans-serif`} fontSize={"14px"} margin="0px 32px 0px 0px" >
                SALES REPS
            </Typography>
            <div className="hr-div" ></div>
        </div>
        <div className="flex ContenetRight flex-col items-start justify-start">
            <div className="ContentContainer">
                <Image width={"584px"} height={"686px"} alt="asset_one" src={"/assets/images/image_asset_two.png"}/>
                <div className="Texts">
                    <Typography fontWeight={"medium"} className="text56" variant="h1" fontFamily={`"NeueMontreal", sans-serif`} align="left"  >
                    Uncapped
                    </Typography>
                    <Typography fontWeight={"medium"} className="text56" variant="h1" fontFamily={`"NeueMontreal", sans-serif`} align="left"  >
                    earning only for,
                    </Typography>
                    <Typography fontWeight={"500"} color="#d2d0fb" fontStyle={"italic"} className="text56" align="left" fontFamily={`Tiempos-Regular, Georgia, sans-serif`} >
                    the very best
                    </Typography>
                    <h4 className="TypographyContainer p24"  style={{  fontFamily:`NeueMontreal, sans-serif`,  color:"#918f8d", fontWeight:"400", textAlign: "left"}} >
                    Reps accepted to join SellX, have an entrepreneurial mindset, are resilient and are the best at what they do.
                    </h4>
                </div>
                
            </div>
            
            <IconLeft   Icon={ArrowForward} style={{ marginTop: "48px"}} >
            Learn more - For Sales Reps
            </IconLeft>
            <div className="flex flex-row Companies">
                <Company name="amazon" />
                <Company name="sap" />
                <Company name="google" />
            </div>
        </div>
        
        
    </CustomSectionBox>
  )
}

export default Section2

const CustomSectionBox = styled(Box)`
.TypographyContainer{
    width: 55%;
    @media (max-width: 768px) {
        width: 100%;
    }
}
.ContentContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-between;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start
    }
}
.Texts{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }
}
padding: 100px;
@media (max-width: 768px) {
    padding: 10%;
}
position: relative;
.hr-div{
    height: 1px;
    width: 400px;
    @media (max-width: 768px) {
        width: 60vw;
    }
    background-color: #2a2928;
}
.HeaderTextLeft{
    margin-bottom: 72px;
}
.ContentRight{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}
.Companies{
    margin-top: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;        
    width: 100%;
}
.SectionImage{
    position: absolute !important;
    right: 0px;
    top: 20%;
}
.icon_left{
    width: 258px;
    @media (max-width: 768px) {
        width: 100%;
    }
}
    
`