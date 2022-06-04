import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'

function HMFeatures() {
  return (
    <CustomBoxContainer className="flex flex-col items-center justiyf-start" >
      <Box className="InnerBox flex flex-col items-start justify-start" >
        <h5 className="text56"   style={{ marginBottom:"20px", fontFamily:`"NeueMontreal", sans-serif`,  color:"white", fontWeight:"medium", textAlign: "left" }} >
            The first all-in-one sales platform
            <span className="text56" style={{ fontFamily: `Tiempos-Regular, Georgia, sans-serif`, color: "#d2d0fb", fontStyle: "italic", marginLeft: "10px", fontWeight: "500"}}>
              optimized for growth.
            </span>
        </h5>
        <h4 className="TypographyContainer p24"  style={{  fontFamily:`NeueMontreal, sans-serif`,  color:"#918f8d", fontWeight:"400", textAlign: "left"}} >
        Complete with integrated sales and marketing tools which track performance, automate workflows, and manage payments.
            </h4>
      </Box>
    </CustomBoxContainer>
  )
}

export default HMFeatures

const CustomBoxContainer  = styled(Box)`
  padding: 100px 0px;
  width: 100%;
  @media (max-width: 768px) {
    padding: 10%;
  }
  .InnerBox{
    margin: 0px 79px;
  }
  >h5{
    width: 100%;
  }
  >h4{
    @media (max-width: 768px) {
      width: 100%;
    }
    width: 50%;
  }

`   