import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { FeaturesContext } from '.'

function FeatureButton({children, feature,}: { children : string, feature: "crm & tasks" | "sequences" | "data & analytics" | "messaging"}) {  
    const {current_feature, chooseFeature} = useContext(FeaturesContext)
    const [active, set_active] = useState<boolean>(false)

    useEffect(()=>{
        if(current_feature === feature){
            set_active(true)
        }else{
            set_active(false)
        }
    }, [,current_feature])


  return (
    <CustomContainerBox onClick={()=>{
        chooseFeature(feature)
    }} className='flex w-full flex-col items-start justify-start' >
        <Typography className="uppercase" color="white" fontWeight={"300"} fontSize={"40px"} variant="h6" fontFamily={`"NeueMontreal-300", sans-serif`} align="left" width="100%" >
                {feature}
        </Typography>
        <p   style={{ marginBottom:"14px", fontFamily:`NeueMontreal, sans-serif`,  color:"#918f8d", fontSize:"16px", fontWeight:"400", textAlign: "left", overflow: "hidden", transition: "height 1s linear", height: active? "100%" : "0%"}} >
            {active ? children : ""} 
        </p>
    </CustomContainerBox>
  )
}

export default FeatureButton

const CustomContainerBox = styled('button')`
    border: none;
    outline: none;
    background: none;
    padding-top: 32px;
    padding-bottom: 16px;
    cursor: pointer;
    border-bottom: 1px solid #686764;
    :active{
        border-bottom: 1px solid #535250;
    }
`