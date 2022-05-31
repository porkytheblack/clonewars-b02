import styled from '@emotion/styled'
import React from 'react'

function SignUpButton({ children }: {children: React.ReactNode}) {
  return (
    <CustomButton className="flex flex-row items-center justify-center outline-none  cursor-pointer"  >
        {children}
    </CustomButton>
  )
}

export default SignUpButton

const CustomButton = styled('button')`
    border: 1px solid white;
    padding: 9px 20px;
    background-color: white;
    font-size: 16px;
    font-family: NeueMontreal, sans-serif;
    color: black;
    :hover {
        background-color: black;
        color: white;
    }
`