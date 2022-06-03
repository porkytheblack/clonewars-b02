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
        <div style={{marginTop: "100px", width: "inherit", justifyContent: "flex-end"}} className="flex flex-row items-center justify-end ">
            <h4 className="TypographyContainer"  style={{  fontFamily:`NeueMontreal, sans-serif`,  color:"#918f8d", fontSize:"24px", fontWeight:"400", textAlign: "center" }} >
                Designed for companies looking to scale faster and more efficiently, SellX provides access to premium, on-demand sales talent and an integrated toolset to help companies grow at lightning speed.
            </h4>
        </div>
    </CustomContainerBox>
  )
}

export default WhoWeAre

const CustomContainerBox  = styled(Box)`
    padding: 100px;
    .TypographyContainer{
        width: 50%;
    }
`