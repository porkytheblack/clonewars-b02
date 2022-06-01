import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SignUpButton from '../../Components/Buttons/SignUpButton'
import Company from '../../Components/Logo/company'

function Network() {
  return (
    <CustomContainerBox className="flex flex-col items-center justify-start w-full" >
         <Typography className="mb-10" color="white" fontWeight={"300"} fontSize={"40px"} variant="h6" fontFamily={`"NeueMontreal-300", sans-serif`} align="center" width="100%" >
                Our network consists of only the best
        </Typography>
        <Grid borderTop={"1px dashed #3e3e3c"} container spacing={0} width="100vw" >
            {["swimply", "directv", "oracle", "allstate", "doordash", "uber", "amazon", "sunday", "emotive", "wework", "deel", "sap"].map((company: any, index) => (
                <CustomGridBox key={index} item xl={2} lg={2} md={4} sm={6} xs={12} className="flex flex-col items-center justify-start w-full" >
                    <Company name={company} style={company == "sap" ? {height: "40px"} : {}} />
                </CustomGridBox>
            ))}
        </Grid>
        <Grid borderBottom={"1px solid #3e3e3c"} container spacing={0} width="100vw" >
                <Grid justifyContent={"space-between"} borderRight={"1px solid #3e3e3c"} padding={"140px 95px"}  item xl={6} lg={6} md={6} sm={6} xs={12} className="flex flex-col items-center justify-between" >
                    <h4   style={{  fontFamily:`NeueMontreal, sans-serif`,  color:"#918f8d", fontSize:"24px", fontWeight:"400", textAlign: "left", width: "50%" }} >
                        SALES REPS
                    </h4>
                    <div>
                        <Typography fontWeight={"medium"} fontSize={"72px"} variant="h1" fontFamily={`"NeueMontreal", sans-serif`} align="center" width="100%" >
                            Unlock your
                        </Typography>
                        <Typography fontWeight={"500"} color="#d2d0fb" fontStyle={"italic"} fontSize={"72px"} align="center" fontFamily={`Tiempos-Regular, Georgia, sans-serif`} >
                            full potential.
                        </Typography>
                    </div>

                    <SignUpButton style={{padding: "12px 40px"}} >
                        Start earning
                    </SignUpButton>

                </Grid>
                <Grid justifyContent={"space-between"}  item xl={6} lg={6} md={6} sm={6} xs={12} padding={"140px 95px"} className="flex flex-col items-center justify-center" >
                    <h4   style={{  fontFamily:`NeueMontreal, sans-serif`,  color:"#918f8d", fontSize:"24px", fontWeight:"400", textAlign: "left", width: "50%" }} >
                        COMPANIES
                    </h4>
                    <div>
                        <Typography fontWeight={"medium"} fontSize={"72px"} variant="h1" fontFamily={`"NeueMontreal", sans-serif`} align="center" width="100%" >
                            Get results.
                        </Typography>
                        <Typography fontWeight={"500"} color="#d2d0fb" fontStyle={"italic"} fontSize={"72px"} align="center" fontFamily={`Tiempos-Regular, Georgia, sans-serif`} >
                            Drive revenue.
                        </Typography>
                    </div>

                    <SignUpButton style={{padding: "12px 40px"}} >
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
`

const CustomGridBox  = styled(Grid)`
    border-right: 1px dashed #3e3e3c;
    border-bottom: 1px dashed #3e3e3c;
    padding: 24px;
`