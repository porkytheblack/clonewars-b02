import React from 'react'
import styled from "@emotion/styled"
import { Box, Typography } from '@mui/material'
import AnimatedText from './AnimatedText'
function WhoWeAre() {
  return (
    <CustomContainerBox className="flex flex-col items-start justify-start " >
        <AnimatedText>
            The most advanced revenue
        </AnimatedText>
        <AnimatedText>
        platform to effortlessly source,
        </AnimatedText>
        <AnimatedText>
        manage, and scale top remote
        </AnimatedText>
        <AnimatedText>
        sales talent to generate qualified
        </AnimatedText>
        <AnimatedText>
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