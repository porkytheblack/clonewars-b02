import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import React from 'react'
import Image from "next/image"


function Logo() {
  return (
    <CustomButton className="flex flex-row border-none items-center justify-center p-[2px_4px] outline-none bg-transparent cursor-pointer" >
        <Image width={"88px"} height="24.36px" src="/assets/logos/sellx.png" alt="logo" />
    </CustomButton  >
  )
}

export default Logo

const CustomButton = styled('button')`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
`

