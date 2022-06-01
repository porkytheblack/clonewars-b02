import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../redux/hooks'
import styles from '../styles/Home.module.css'
import {Box} from "@mui/material"
import HeroBlock from '../PageComponents/HeroBlock'
import styled from '@emotion/styled'
import { useContext, useEffect } from 'react'
import { ScrollContext } from '../helpers/scroll-observer'
import useWindowSize from '../helpers/useWindowSize'
import WhoWeAre from '../PageComponents/WhoWeAre'
import Section1 from '../Components/Sections/Section1'
import TheNumbers from '../PageComponents/TheNumbers'
import Section2 from '../Components/Sections/Section2'
import HMFeatures from '../PageComponents/HMFeatures'
import Features from '../PageComponents/Features'
import Mentions from '../PageComponents/Mentions'
import Network from '../PageComponents/Network'

const Home: NextPage = () => {
  
  
  const name = useAppSelector(state=>state.awesomeness.name)
  return (
    <HomeBox className="w-full flex flex-col items-center justify-start h-full " >
        <HeroBlock/>
        <WhoWeAre/>
        <Section1/>
        <TheNumbers/>
        <Section2/>
        <HMFeatures/>
        <Features/>
        <Mentions/>
        <Network/>
    </HomeBox>
  )
}

export default Home


const HomeBox  = styled(Box)`
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