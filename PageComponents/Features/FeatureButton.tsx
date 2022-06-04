import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { FeaturesContext } from '.'
import useWindowSize from '../../helpers/useWindowSize'

function FeatureButton({children, feature,}: { children : string, feature: "crm & tasks" | "sequences" | "data & analytics" | "messaging"}) {  
    const {current_feature, chooseFeature} = useContext(FeaturesContext)
    const [active, set_active] = useState<boolean>(false)
    const [mobile, set_mobile] = useState<boolean>(false)

    const {width: w, height: h} = useWindowSize()

    useEffect(() => {
        if(typeof w === "number" && typeof h === "number") {
            if(w < 768) {
                set_mobile(true)
            } else {
                set_mobile(false)
            }
        }
    }, [,w, h])

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
    }} className='flex feature-button flex-col items-start justify-start' >
        <Typography className="uppercase text40" color="white" fontWeight={"300"}  variant="h6" fontFamily={`"NeueMontreal-300", sans-serif`} align="left" width="100%" >
                {feature}
        </Typography>
        {!mobile && <p   style={{ marginBottom:"14px", fontFamily:`NeueMontreal, sans-serif`,  color:"#918f8d", fontSize:"16px", fontWeight:"400", textAlign: "left", overflow: "hidden", transition: "height 1s linear", height: active? "100%" : "0%"}} >
            {active ? children : ""} 
        </p>}
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
    >p{
        display: flex;
        @media (max-width: 768px) {
            display: none;
        }
    }
`