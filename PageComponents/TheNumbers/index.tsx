import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import Stats from '../../Components/Figures/Stats'

function TheNumbers() {
  return (
    <CustomBoxContainer className="flex flex-row items-center " >
        <Stats stat="50%" desc="More cost effective" />
        <div className="vr"></div>
        <Stats stat="12x" desc="Faster rump-up" />
        <div className="vr"></div>
        <Stats stat="3x" desc="More output" />
    </CustomBoxContainer>
  )
}

export default TheNumbers

const CustomBoxContainer = styled(Box)`
    margin: 40px 79px 0px;
    padding: 40px 95px 60px;
    border: 1px solid #3e3e3c;
    justify-content: space-around;
    width: 80%;
    .vr{
        height: 159px;
        width: 1px;
        background: #2a2928;
    }
`