import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useContext } from 'react'
import ScrollTracker from '../Components/Buttons/ScrollTracker'
import ScrollObserver from '../helpers/scroll-observer'
import Footer from './Footer'
import TopBar from './TopBar'

function Layout({ children }: {children: React.ReactNode}) {
  
  return (
    
      <CustomLayoutBox className="w-screen  flex flex-col items-center justify-start" >
        <ScrollObserver>
          <TopBar/>
          {children}
          <Footer/>
          <ScrollTracker/>
          </ScrollObserver>
      </CustomLayoutBox>
  )
}

export default Layout

const CustomLayoutBox = styled(Box)`
    background-color: black;
    
    width: 100vw;

`