import React from 'react'
import styled from "@emotion/styled"
import { Box, Typography } from '@mui/material'
import AnimatedText from './AnimatedText'


interface n {
    percentage_in_view: number
}


function WhoWeAre() {
  return (
    <CustomContainerBox className="flex flex-col items-start justify-start " >
        
        <AnimatedText pos={0} >
            The most advanced revenue
        </AnimatedText>
        <AnimatedText pos={1} >
        platform to effortlessly source,
        </AnimatedText>
        <AnimatedText pos={2} >
        manage, and scale top remote
        </AnimatedText>
        <AnimatedText pos={3} >
        sales talent to generate qualified
        </AnimatedText>
        <AnimatedText pos={4} >
        opportunities.
        </AnimatedText>
        <div style={{ width: "inherit", justifyContent: "flex-end"}} className="flex bottomdiv flex-row items-center justify-end ">
            <h4 className="TypographyContainer p24"  style={{  fontFamily:`NeueMontreal, sans-serif`,  color:"#918f8d", fontWeight:"400", textAlign: "left" }} >
                Designed for companies looking to scale faster and more efficiently, SellX provides access to premium, on-demand sales talent and an integrated toolset to help companies grow at lightning speed.
            </h4>
        </div>
    </CustomContainerBox>
  )
}

export default WhoWeAre

const CustomContainerBox  = styled(Box)`
    padding: 100px;
    width: 100vw;
    @media (max-width: 768px) {
        padding: 2%;
    }
    .TypographyContainer{

        width: 50%;
        @media (max-width: 768px) {
            width: 70%;
        }
        @media (max-width: 576px) {
            width: 100%;
        }
    }
    .bottomdiv{
        width: 100%!important;
        padding: 10%;
        margin-top: 100px;
        @media (max-width: 768px) {
            margin-top: 20px;
        }
    }
`