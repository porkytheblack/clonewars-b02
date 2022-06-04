import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SignUpButton from '../../Components/Buttons/SignUpButton'
import Company from '../../Components/Logo/company'

function Network() {
  return (
    <CustomContainerBox className="flex flex-col items-center justify-start w-full" >
         <Typography style={{marginBottom: "20px"}} className=" text32" color="white" fontWeight={"300"}  variant="h6" fontFamily={`"NeueMontreal-300", sans-serif`} align="center" width="100%" >
                Our network consists of only the best
        </Typography>
        <Grid borderTop={"1px dashed #3e3e3c"} container spacing={0} width="100vw" >
            {["swimply", "directv", "oracle", "allstate", "doordash", "uber", "amazon", "sunday", "emotive", "wework", "deel", "sap"].map((company: any, index) => (
                <CustomGridBox key={index} item xl={2} lg={2} md={2} sm={4} xs={4} className="flex flex-col items-center justify-start w-full" >
                    <Company name={company} style={company == "sap" ? {height: "40px"} : {}} />
                </CustomGridBox>
            ))}
        </Grid>
        <Grid borderBottom={"1px solid #3e3e3c"} container spacing={0} width="100vw" >
                <Grid  justifyContent={"space-between"}    item xl={6} lg={6} md={6} sm={6} xs={12} className="flex ContentGrid flex-col top-element items-center justify-between" >
                    <h4   style={{  fontFamily:`NeueMontreal, sans-serif`,  color:"#918f8d", fontSize:"24px", fontWeight:"400", textAlign: "center", width: "100%" }} >
                        SALES REPS
                    </h4>
                    <div>
                        <Typography fontWeight={"medium"} className="text56" variant="h1" fontFamily={`"NeueMontreal", sans-serif`} align="center" width="100%" >
                            Unlock your
                        </Typography>
                        <Typography fontWeight={"500"} color="#d2d0fb" fontStyle={"italic"} className="text56" align="center" fontFamily={`Tiempos-Regular, Georgia, sans-serif`} >
                            full potential.
                        </Typography>
                    </div>

                    <SignUpButton style={{padding: "12px 40px", marginTop: "40px"}} >
                        Start earning
                    </SignUpButton>

                </Grid>
                <Grid justifyContent={"space-between"}  item xl={6} lg={6} md={6} sm={6} xs={12}  className="flex flex-col items-center ContentGrid justify-center" >
                    <h4   style={{  fontFamily:`NeueMontreal, sans-serif`,  color:"#918f8d", fontSize:"24px", fontWeight:"400", textAlign: "center", width: "100%" }} >
                        COMPANIES
                    </h4>
                    <div>
                        <Typography fontWeight={"medium"} className="text56" variant="h1" fontFamily={`"NeueMontreal", sans-serif`} align="center" width="100%" >
                            Get results.
                        </Typography>
                        <Typography fontWeight={"500"} color="#d2d0fb" fontStyle={"italic"} className="text56" align="center" fontFamily={`Tiempos-Regular, Georgia, sans-serif`} >
                            Drive revenue.
                        </Typography>
                    </div>

                    <SignUpButton style={{padding: "12px 40px", marginTop: "40px"}} >
                        Start growing
                    </SignUpButton>
                </Grid>
        </Grid>
    </CustomContainerBox>
  )
}

export default Network

const CustomContainerBox = styled(Box)`
    align-items: center;
    .CompanyBox{
        
    }
    .ContentGrid{
        padding: 140px 90px;
        @media (max-width: 768px) {
            width: 100vw;
            padding: 10%;
        }
    }
    .top-element{
        border-right: 1px solid #3e3e3c !important;
        @media (max-width: 768px) {
            border-right: none;
            border-bottom: 1px solid #3e3e3c !important;
        }
    } 
`

const CustomGridBox  = styled(Grid)`
    border-right: 1px dashed #3e3e3c;
    border-bottom: 1px dashed #3e3e3c;
    padding: 24px;
`