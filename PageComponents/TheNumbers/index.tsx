import styled from '@emotion/styled'
import { Box, Grid } from '@mui/material'
import React from 'react'
import Stats from '../../Components/Figures/Stats'

function TheNumbers() {
  return (
    <CustomBoxContainer container spacing={0} className="flex flex-row items-center " >
        <Grid className="top-grid-element" item xl={4} lg={4} md={4} sm={12} xs={12} >
          <Stats stat="50%" desc="More cost effective" />
        </Grid>
        <Grid className="bottom-grid-element" item xl={4} lg={4} md={4} sm={6} xs={6} >
          <Stats stat="12x" desc="Faster rump-up" />
        </Grid>
        <Grid className="bottom-grid-element element-right " item xl={4} lg={4} md={4} sm={6} xs={6} >
          <Stats stat="3x" desc="More output" /> 
        </Grid>
    </CustomBoxContainer>
  )
}

export default TheNumbers

const CustomBoxContainer = styled(Grid)`
    margin: 40px 79px 0px;
    padding: 40px 95px 60px;
    border: 1px solid #3e3e3c;
    width: 80%;
    justify-content: space-around;
    width: 80%;
    @media (max-width: 768px) {
      margin: 0px;
      padding: 0px;
      border: none;
      width: 90%;
    }
    .top-grid-element{
      @media (max-width: 886px) {
        padding-bottom: 20px;
        border-bottom: 1px solid #3e3e3c;
      }
    }
    .bottom-grid-element{
      border-left: 1px solid #3e3e3c;
      @media (max-width: 886px) {
        border: none;
      }
    }

    .element-right{
      @media (max-width: 886px) {
        border-left: 1px solid #3e3e3c;
      }
    }
    
    .vr{
        height: 159px;
        width: 1px;
        background: #2a2928;
    }
`