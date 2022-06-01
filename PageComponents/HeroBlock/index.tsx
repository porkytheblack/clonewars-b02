import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SignUpButton from '../../Components/Buttons/SignUpButton'
import Block from '../../Components/Figures/Block'
import Company from '../../Components/Logo/company'
import Keynote from '../../Components/Testimonials/Keynote'
import Underline from "../../public/assets/svgs/hero_underline.svg"
import WorkFromX from "../../public/assets/svgs/work_from_x.svg"

function HeroBlock() {
  return (
        <CustomHeroBlock className="flex  flex-row items-center justify-between" >
            <Box className="CLeft flex flex-col items-center justify-start" >
                <Box className="flex flex-col items-center justify-center" >
                    <Typography fontWeight={"medium"} fontSize={"100px"} variant="h1" fontFamily={`"NeueMontreal", sans-serif`} align="center" width="100%" >
                        Endless scale, powered by 
                    </Typography>
                    <Typography fontWeight={"500"} color="#cbc4b7" fontStyle={"italic"} fontSize={"109px"} fontFamily={`Tiempos-Regular, Georgia, sans-serif`} >
                        real humans
                    </Typography>
                    <Underline className="" />
                </Box>
                <div className="flex mb-9 flex-row flex-wrap items-center justify-center">
                    <h4   style={{ marginBottom:"20px", fontFamily:`NeueMontreal, sans-serif`,  color:"white", fontSize:"24px", fontWeight:"400", textAlign: "center" }} >
                        A modern sales platform connecting innovative companies with an elite remote sales force to 
                        <span style={{fontSize: "24px", fontFamily: `Tiempos-Regular, Georgia, sans-serif`, color: "#cbc4b7", fontStyle: "italic", marginLeft: "10px"}}>
                            drive revenue
                        </span>
                    </h4>
                
                </div>
                <SignUpButton style={{width: "25%", padding: "12px 28px" , marginLeft: "28px"}} >
                    Get started today
                </SignUpButton>
                <div className="flex flex-col mt-6 items-center justify-start">
                    <div style={{marginBottom: "10px"}} className="flex flex-row items-center justify-center mb-3">
                        <Company name="andreessen_horowitz" />
                        <Company name="spark_capital" />
                        <Company name="y_combinator" />
                    </div>
                    <Typography fontSize="14px" fontWeight={"400"} color="#918f8d" align='center' width={"200px"} fontFamily={`NeueMontreal, sans-serif`}  >
                        Trusted by companies at top funds
                    </Typography>
                </div>
            </Box>
            <Box className="CRight h-full flex space-y-4 flex-col items-center justify-start" >
                <WorkFromX/>
                <Block figures={1.5} range={"M"} >
                    Earned To Date by reps
                </Block>
                <Block figures={200} range={"M"} >
                    Closed won by companies to date
                </Block>
                <Keynote img="/assets/people/Eitan.jpeg" info='Eitan Saban, Prev. sales executive @ Docusign & Adobe' header='A truly game-changing sales platform for the emerging skilled economy.' />
            </Box>
        </CustomHeroBlock>
  )
}

export default HeroBlock

const CustomHeroBlock = styled(Box)`
    
    padding: 100px 0px;
    .CLeft {
        width: 60%;
    }
    .CRight {
        width: 30%;
        
        border-left: 1px solid #2a2928;
    }
`