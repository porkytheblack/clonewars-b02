import React from 'react'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material'
import styled from '@emotion/styled'

function IconLeft({ children, style, Icon}: {children: React.ReactNode, style?: React.CSSProperties, Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> }) {
  return (
    <CustomButton style={style} className="flex icon_left flex-row items-center justify-between outline-none  cursor-pointer"  >
    {children}
    <Icon className="icon" />
    </CustomButton>
  )
}

export default IconLeft

const CustomButton = styled('button')`
    border: 1px solid white;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-between;
    padding: 10px 20px;
    font-size: 16px;
    font-family: NeueMontreal, sans-serif;
    color: black;
    :hover {
        background-color: black;
        color: white;
    }
    :focus-within{
        background-color: black;
        color: white;
    }
    :active{
        background-color: black;
        color: white;
    }
    .icon{
        font-size: 24px !important;
    }
`