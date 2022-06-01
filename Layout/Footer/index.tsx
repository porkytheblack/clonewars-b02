import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import React from 'react'
import Logo from "../../Components/Logo/index"
import UsefulLinks from '../../Components/Sections/UsefulLinks'

interface n {
    title: string,
    url: string
}
const list: n[] = [
    {
        title: "SellX",
        url: "https://sellx.io"
    },
    {
        title: "SellX Blog",
        url: "https://blog.sellx.io"
    },
    {
        title: "SellX Discord",
        url: "https://discord.gg/SellX"
    },
    {
        title: "SellX Telegram",
        url: "https://t.me/SellX"
    },
    {
        title: "SellX Twitter",
        url: "https://twitter.com/SellX"
    },
    {
        title: "SellX Facebook",
        url: "https://facebook.com/SellX"
    },
    {
        title: "SellX Instagram",
        url: "https://instagram.com/SellX"
    },
    {
        title: "SellX YouTube",
        url: "https://youtube.com/SellX"
    },
    {
        title: "SellX Medium",
        url: "https://medium.com/@SellX"
    }]

            

function Footer() {
  return (
      <>
    <CustomFooter paddingTop="100px" width="100vw" marginLeft="79px"  container spacing={0} >
        <Grid display={"flex"} alignItems="flex-start" justifyContent={"flex-start"} className="flex-col items-start justify-start" item  xl={6} lg={6} md={6} sm={12} xs={12} >
            <Logo/>
            <p   style={{width: "300px",  fontFamily:`NeueMontreal, sans-serif`,  color:"#918f8d", fontSize:"16px", fontWeight:"400", textAlign: "left", overflow: "hidden", marginTop: "20px"}} >
                The first all-in-one sales platform designed to provide companies an easy way to access and collaborate with the top 1% of sales talent, on-demand.       
            </p>
        </Grid>
        <Grid item  xl={6} lg={6} md={6} sm={12} xs={12}>
            <Grid width="100%"  container spacing={0} className="flex-col items-start justify-start" >
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                    <UsefulLinks header="Company" links={list.slice(0,4)} />
                </Grid>
                {/* Repeat the above  */}
            </Grid>
        </Grid>
    </CustomFooter>
    <Grid marginTop="100px" width="100vw" alignItems="center" justifyContent="center" padding="32px 0px" borderTop="1px solid #3e3e3c"   item xl={12} lg={12} md={12} sm={12} xs={12} >
            <p  className="uppercase"  style={{ fontFamily:`NeueMontreal, sans-serif`,  color:"#918f8d", fontSize:"14px", fontWeight:"400", textAlign: "center", overflow: "hidden", }} >
                © 2020 SellX - All rights reserved.
            </p>
        </Grid>
    </>
  )
}

export default Footer

const CustomFooter = styled(Grid)`
    width: "100vw";
`   