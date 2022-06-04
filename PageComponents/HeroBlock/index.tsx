import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SignUpButton from '../../Components/Buttons/SignUpButton'
import Block from '../../Components/Figures/Block'
import Company from '../../Components/Logo/company'
import Keynote from '../../Components/Testimonials/Keynote'
import useWindowSize from '../../helpers/useWindowSize'
import Underline from "../../public/assets/svgs/hero_underline.svg"
import WorkFromX from "../../public/assets/svgs/work_from_x.svg"

function HeroBlock() {
    const [mobile, set_mobile] = useState<boolean>(false)
    const {width: w, height: h} = useWindowSize()
    useEffect(()=>{
        if(typeof w !== "undefined" && typeof h !== "undefined"){
            if(w <= 768){
                set_mobile(true)
            }else{
                set_mobile(false)
            }
        }
        
    }, [, w, h])
  return (
        <CustomHeroBlock   >
            <Box className="CLeft flex flex-col items-center justify-start" >
                <Box className="flex flex-col items-center justify-center" >
                    <Typography fontWeight={"medium"} className="big-text" variant="h1" fontFamily={`"NeueMontreal", sans-serif`} align="center" width="100%" >
                        Endless scale, powered by 
                    </Typography>
                    <Typography fontWeight={"500"} color="#cbc4b7" fontStyle={"italic"} className="big-text" fontFamily={`Tiempos-Regular, Georgia, sans-serif`} >
                        real humans
                    </Typography>
                    {/* <Underline className="" /> */}
                    <CustomUnderline/>
                </Box>
                <div className="flex mb-9 p24paragraph flex-row flex-wrap items-center justify-center">
                    <h4  className="p24" style={{ marginBottom:"20px", fontFamily:`NeueMontreal, sans-serif`,  color:"white", fontWeight:"400", textAlign: "center" }} >
                        A modern sales platform connecting innovative companies with an elite remote sales force to 
                        <span className="p24" style={{ fontFamily: `Tiempos-Regular, Georgia, sans-serif`, color: "#cbc4b7", fontStyle: "italic", marginLeft: "10px"}}>
                            drive revenue
                        </span>
                    </h4>
                </div>
                <SignUpButton style={{width: mobile ? "50vw" : "30%", padding: "12px 28px" , marginLeft: "28px"}} >
                    Get started today
                </SignUpButton>
                {!mobile && <div className="flex flex-col mt-6 items-center justify-start">
                    <div style={{marginBottom: "10px", marginTop: "24px"}} className="flex flex-row items-center justify-center mb-3">
                        <Company name="andreessen_horowitz" />
                        <Company name="spark_capital" />
                        <Company name="y_combinator" />
                    </div>
                    <Typography fontSize="14px" fontWeight={"400"} color="#918f8d" align='center' width={"200px"} fontFamily={`NeueMontreal, sans-serif`}  >
                        Trusted by companies at top funds
                    </Typography>
                </div>}
            </Box>
            <Box className="CRight h-full flex space-y-4 flex-col items-center justify-start" >
                {!mobile && <WorkFromX/>}
                <Block figures={1.5} range={"M"} >
                    Earned To Date by reps
                </Block>
                <Block figures={200} range={"M"} >
                    Closed won by companies to date
                </Block>
                {!mobile && <Keynote img="/assets/people/Eitan.jpeg" info='Eitan Saban, Prev. sales executive @ Docusign & Adobe' header='A truly game-changing sales platform for the emerging skilled economy.' />}
            </Box>
            {mobile && <div className="flex flex-col mt-6 items-center justify-start">
                    <div style={{marginBottom: "10px", marginTop: "24px"}} className="flex flex-row items-center justify-center mb-3">
                        <Company name="andreessen_horowitz" />
                        <Company name="spark_capital" />
                        <Company name="y_combinator" />
                    </div>
                    <Typography fontSize="14px" fontWeight={"400"} color="#918f8d" align='center' width={"200px"} fontFamily={`NeueMontreal, sans-serif`}  >
                        Trusted by companies at top funds
                    </Typography>
                </div>}
        </CustomHeroBlock>
  )
}

export default HeroBlock

const CustomHeroBlock = styled(Box)`
    display: flex;
    width: 100vw;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .p24paragraph{
        width: 80%;
    }
    @media (max-width: 768px) {
        flex-direction: column !important;
        justify-content: flex-start !important;
    }
    padding: 100px 0px;
    .CLeft {
        width: 60%;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
    .CRight {
        width: 30%;
        margin-top: 30px;
        border-left: 1px solid #2a2928;
        @media (max-width: 768px) {
            width: 100%;
            border-left: none;
            display: flex !important;
            flex-direction: row !important;
            align-items: flex-start !important;
            justify-content: center !important;
        }
    }
`

const CustomUnderline = styled(Underline)`
    transform: scale(0.8);
    width: 100%;
    @media(max-width: 768px){
        transform: scale(0.3);
        width: 100%;
    }
`