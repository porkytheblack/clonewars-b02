import styled from '@emotion/styled'
import { Link } from '@mui/material'
import React, { useState } from 'react'

function NavbarButton({ children, style, alignment }: {children: React.ReactNode, style?: React.CSSProperties | undefined, alignment?: "left" | "right" | "center"}) {
    const [hover, set_hover] = useState<boolean>(false)

  return (
    <CustomButton style={style} onMouseEnter={()=>{set_hover(true)}} onMouseLeave={()=>{set_hover(false)}} className="flex flex-row items-center justify-center p-[20px_16px] border-none outline-none bg-transparent cursor-pointer"  >
        <Link width="100%" align={typeof alignment == "undefined" ? "center" : alignment} fontFamily={"NeueMontreal, sans-serif"} underline='none' variant='body1' className="uppercase" fontSize={"12px"} color={hover? "#cbc4b7" : "secondary"} >
            {children}
        </Link>
    </CustomButton>
  )
}

export default NavbarButton

const CustomButton = styled('button')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`