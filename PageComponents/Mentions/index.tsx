import styled from '@emotion/styled'
import React, { createContext, useEffect, useState } from 'react'
import {Box} from "@mui/material"
import Quotes from "../../public/assets/svgs/quotes.svg"
import Testimonial from './Testimonial'
import DirectionButton from '../../Components/Buttons/DirectionButton'

export interface quoute {
    testimonial: string,
    author: string,
    author_company: string,
    author_image: string
}




interface testimonial_context {
    id: number
}

export const TestimonialContext = createContext<testimonial_context>({
    id: 0
})

function Mentions() {
    const numbe_of_testimonials = 3;
    const [active, set_active] = useState<boolean>(false)
    const [active_id, set_active_id] = useState<number>(0)
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(!active){
                if(active_id === numbe_of_testimonials - 1){
                    set_active_id(0)
                }else{
                    set_active_id(active_id + 1)
                }
            }
        }, 10000)
        return () => clearInterval(interval)
    }, [])
    


  return (
    <TestimonialContext.Provider value={{id: active_id}}>
        <CustomContainerBox className="flex flex-col items-start justify-start w-full"  >
            <QuoteStyled />
            <Testimonial/>
            <div className="directionButtons flex flex-row items-center justify-center ">
                <DirectionButton onClick={()=>{
                    if(active_id === 0){
                        set_active_id(numbe_of_testimonials - 1)
                    }else{
                        set_active_id(active_id - 1)
                    }
                    set_active(true)
                }} direction="left" />
                
                
                <DirectionButton direction='right' onClick={()=>{
                    if(active_id === numbe_of_testimonials - 1){
                        set_active_id(0)
                    }else{
                        set_active_id(active_id + 1)
                    }
                    set_active(true)
                }} />
            </div>
        </CustomContainerBox>
    </TestimonialContext.Provider>
  )
}

export default Mentions

const CustomContainerBox = styled(Box)`
    padding-top: 240px;
    padding-bottom: 200px;
    padding-left: 100px;
    padding-right: 100px;
    @media (max-width: 768px) {
        padding: 10% 10%;
    }
    position: relative;
    .directionButtons {
        position: absolute;
        bottom: 200px;
        right: 40px;
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column !important;
            width: 100px;
            align-items: center;
            justify-content: space-between !important;
            bottom: 30px;
            right: 0px;
        }
    }
`

const QuoteStyled = styled(Quotes)`
    margin-bottom: 48px;
`