import styled from '@emotion/styled'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import FeatureButton from './FeatureButton'
import Image from "next/image"
import crm_tasks from "../../public/assets/images/crm_tasks.png"
import data_and_analytics from "../../public/assets/images/data_and_analytics.png"
import messaging from "../../public/assets/images/messaging.png"
import sequences from "../../public/assets/images/sequences.png"
import useWindowSize from "../../helpers/useWindowSize"

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
    const [mobile, setMobile] = React.useState<boolean>(false)

    const {width: w, height: h} = useWindowSize()
    useEffect(()=>{
        if(typeof w !== "undefined"){
            if(w < 768){
                setMobile(true)
            }else{
                setMobile(false)
            }
        }
    }, [w,h])
  return (
    <FeaturesContext.Provider value={{current_feature, chooseFeature}} >
        <CustomBoxContainer className='flex flex-col items-start justify-start' >
            <div className="TabNav ">
                <div className="featurebutton">
                    <FeatureButton feature='crm & tasks' >
                        Manage all of your leads and activities in one intuitive interface. Optimized workflows make it fast and easy to see what you need to act on next to get the most out of your pipeline and close more deals. 
                    </FeatureButton>
                </div>
                <div className="featurebutton">
                <FeatureButton feature='sequences' >
                    Build, test, and execute multi-channel outreach strategies to increase your reach and connect with your customers in the places they respond most to drive revenue. A/B test templates and scripts to optimize messaging that converts your leads into customers at scale.   
                </FeatureButton>
                </div>
                <div className="featurebutton">
                <FeatureButton feature='data & analytics' >
                    Keep track of everything that’s happening in your campaigns in real-time so you can maximize results and drive growth. 360-degree visibility lets you focus on what’s important and keeps you moving towards success. 
                </FeatureButton>
                </div>
                <div className="featurebutton">
                <FeatureButton feature='messaging' >
                Learn the most from campaigns and always be aware of what is happening with live data. As reps can see their earnings and companies can see what works and what doesn’t so they can act immediately.
                </FeatureButton>
                </div>
            </div>
            {!mobile && <div className="flex flex-col ImageContainer">
                <Image alt="demo" src={current_feature == "crm & tasks" ? crm_tasks : current_feature == "sequences" ? sequences : current_feature == "data & analytics" ? data_and_analytics : current_feature == "messaging" ? messaging: ""} width={"1056px"} height={"751px"} />
            </div>}

            {mobile && <div className="image-holder" >
                <p   style={{ marginBottom:"14px", fontFamily:`NeueMontreal, sans-serif`,  color:"#918f8d", fontSize:"16px", fontWeight:"400", textAlign: "left", overflow: "hidden", transition: "height 1s linear"}} >
                    {current_feature == "crm & tasks" ? "Manage all of your leads and activities in one intuitive interface. Optimized workflows make it fast and easy to see what you need to act on next to get the most out of your pipeline and close more deals." : current_feature == "sequences" ? "Build, test, and execute multi-channel outreach strategies to increase your reach and connect with your customers in the places they respond most to drive revenue. A/B test templates and scripts to optimize messaging that converts your leads into customers at scale." : current_feature == "data & analytics" ? "Keep track of everything that’s happening in your campaigns in real-time so you can maximize results and drive growth. 360-degree visibility lets you focus on what’s important and keeps you moving towards success." : current_feature == "messaging" ? "Learn the most from campaigns and always be aware of what is happening with live data. As reps can see their earnings and companies can see what works and what doesn’t so they can act immediately." : ""}
                </p>
                    <Image alt="demo" src={current_feature == "crm & tasks" ? crm_tasks : current_feature == "sequences" ? sequences : current_feature == "data & analytics" ? data_and_analytics : current_feature == "messaging" ? messaging: ""} width={"423px"} height={"301px"} /> 
                 </div>}
        </CustomBoxContainer>
    </FeaturesContext.Provider>
    
  )
}

export default Features

const CustomBoxContainer = styled(Box)`
    .featurebutton{
        margin-left: 10px;
        .feature-button{
            width: 300px;
        }
    }
    width: 100vw;
    margin-top: 90px;
    position: relative;
    overflow-x: hidden !important;
    padding-left: 100px;
    padding-right: 100px;
    .image-holder{
        width: 100vw;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
        padding : 10% 10%;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 10% 0px;

    }
    .TabNav{
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        @media (max-width: 768px) {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: flex-between;
            overflow-x: scroll;
            &::-webkit-scrollbar {
                height: 5px;
                background: none;
            }
            &::-webkit-scrollbar-thumb {
                height: 5px;
            }
        }
    }
    .ImageContainer{
        position: absolute;
        right: -30%;
        top: 0px;
        overflow: hidden;
    }
<<<<<<< HEAD
    
=======
    .feature-button{
        width: 500px !important;
    }
>>>>>>> 0ff73d2b186cf614a277328506b122b3910fc55c

`