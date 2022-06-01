import styled from '@emotion/styled'
import { Box } from '@mui/system'
import React from 'react'
import FeatureButton from './FeatureButton'
import Image from "next/image"
import crm_tasks from "../../public/assets/images/crm_tasks.png"
import data_and_analytics from "../../public/assets/images/data_and_analytics.png"
import messaging from "../../public/assets/images/messaging.png"
import sequences from "../../public/assets/images/sequences.png"

interface ft  {
    current_feature:  "crm & tasks" | "sequences" | "data & analytics" | "messaging",
    chooseFeature: (feature: "crm & tasks" | "sequences" | "data & analytics" | "messaging") => void
}

export const FeaturesContext = React.createContext<ft>({
    current_feature: "crm & tasks",
    chooseFeature: (feature: "crm & tasks" | "sequences" | "data & analytics" | "messaging") => {}
})

function Features() {
    const [current_feature, setCurrentFeature] = React.useState<"crm & tasks" | "sequences" | "data & analytics" | "messaging">("crm & tasks")
    const chooseFeature = (feature: "crm & tasks" | "sequences" | "data & analytics" | "messaging") => {
        setCurrentFeature(feature)
    }
  return (
    <FeaturesContext.Provider value={{current_feature, chooseFeature}} >
        <CustomBoxContainer className='flex flex-row items-start justify-start' >
            <div className="flex flex-col items-start justify-start Left">
                <FeatureButton feature='crm & tasks' >
                    Manage all of your leads and activities in one intuitive interface. Optimized workflows make it fast and easy to see what you need to act on next to get the most out of your pipeline and close more deals. 
                </FeatureButton>
                <FeatureButton feature='sequences' >
                    Build, test, and execute multi-channel outreach strategies to increase your reach and connect with your customers in the places they respond most to drive revenue. A/B test templates and scripts to optimize messaging that converts your leads into customers at scale.   
                </FeatureButton>
                <FeatureButton feature='data & analytics' >
                    Keep track of everything that’s happening in your campaigns in real-time so you can maximize results and drive growth. 360-degree visibility lets you focus on what’s important and keeps you moving towards success. 
                </FeatureButton>
                <FeatureButton feature='messaging' >
                Learn the most from campaigns and always be aware of what is happening with live data. As reps can see their earnings and companies can see what works and what doesn’t so they can act immediately.
                </FeatureButton>
            </div>
            <div className="flex flex-col ImageContainer">
                <Image alt="demo" src={current_feature == "crm & tasks" ? crm_tasks : current_feature == "sequences" ? sequences : current_feature == "data & analytics" ? data_and_analytics : current_feature == "messaging" ? messaging: ""} width={"1056px"} height={"751px"} />
            </div>
        </CustomBoxContainer>
    </FeaturesContext.Provider>
    
  )
}

export default Features

const CustomBoxContainer = styled(Box)`
    width: 100vw;
    margin-top: 90px;
    position: relative;
    padding-left: 100px;
    padding-right: 100px;
    .Left{
        width: 40%;

    }
    .ImageContainer{
        position: absolute;
        right: -30%;
        top: 0px;
        overflow: hidden;
    }

`