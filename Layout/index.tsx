import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import TopBar from './TopBar'

function Layout({ children }: {children: React.ReactNode}) {
  return (
    <CustomLayoutBox className="w-screen  flex flex-col items-center justify-start" >
        <TopBar/>
        {children}
    </CustomLayoutBox>
  )
}

export default Layout

const CustomLayoutBox = styled(Box)`
    background-color: black;
    min-height: 100vh;
    max-height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 5px;
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    }
`