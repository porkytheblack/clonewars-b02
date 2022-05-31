import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import React from 'react'

function Logo() {
  return (
    <button className="flex flex-row border-none items-center justify-center p-[2px_4px] outline-none bg-transparent cursor-pointer" >
        <img className="w-[88px] h-6" src="/assets/logos/sellx.png" alt="logo" />
    </button  >
  )
}

export default Logo

