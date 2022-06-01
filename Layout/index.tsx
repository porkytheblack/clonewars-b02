import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useContext } from 'react'
import ScrollObserver from '../helpers/scroll-observer'
import Footer from './Footer'
import TopBar from './TopBar'

function Layout({ children }: {children: React.ReactNode}) {
  
  return (
    <ScrollObserver>
      <CustomLayoutBox className="w-screen  flex flex-col items-center justify-start" >
          <TopBar/>
          {children}
          <Footer/>
      </CustomLayoutBox>
    </ScrollObserver>
  )
}

export default Layout

const CustomLayoutBox = styled(Box)`
    background-color: black;
    min-height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 5px;
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    }
`