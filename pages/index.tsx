import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../redux/hooks'
import styles from '../styles/Home.module.css'
import {Box} from "@mui/material"
import HeroBlock from '../PageComponents/HeroBlock'

const Home: NextPage = () => {
  const name = useAppSelector(state=>state.awesomeness.name)
  return (
    <Box className="w-full flex flex-col items-center justify-start h-full " >
        <HeroBlock/>
    </Box>
  )
}

export default Home
