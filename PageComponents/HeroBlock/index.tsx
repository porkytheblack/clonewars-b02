import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function HeroBlock() {
  return (
        <CustomHeroBlock className="flex flex-col md:flex-row items-center justify-between" >
            <Box className="CLeft flex flex-col items-start justify-start" >
                <Box className="flex flex-col items-center justify-center" >
                    <Typography fontWeight={"medium"} fontSize={"100px"} variant="h1" fontFamily={`"NeueMontreal", sans-serif`} align="center" width="100%" >
                        Endless scale, powered by 
                    </Typography>
                    {/* <Typography fontWeight={"500"} fontStyle={"normal"} fontSize={"109px"} fontFamily={`Tiempos, sans-serif`} >
                        real humans
                    </Typography> */}
                </Box>
            </Box>
        </CustomHeroBlock>
  )
}

export default HeroBlock

const CustomHeroBlock = styled(Box)`
    padding: 100px 0px;
    .CLeft {
        width: 70%;
    }
`