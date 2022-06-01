import styled from '@emotion/styled'
import { Avatar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Keynote({img, header, info}:{img:string, header: string, info: string}) {
  return (
    <CustomContainer className="flex mt-6 flex-col items-center justify-start" >
        <Avatar src={img} sx={{marginBottom: "20px"}} alt="PersonImage" />
        <Typography variant="body1" className='flex' marginBottom={"20px"} fontFamily={`NeueMontreal, sans-serif`} color="white" fontSize={"18px"} fontWeight="400" align="center" width="100%" >
            {header}
        </Typography>
        <Typography fontSize="14px" fontWeight={"400"} color="#918f8d" align='center' width={"200px"} fontFamily={`NeueMontreal, sans-serif`} >
            {info}
        </Typography>
    </CustomContainer>
  )
}

export default Keynote

const CustomContainer = styled(Box)`

`

export const PersonImage = styled('img')`

`