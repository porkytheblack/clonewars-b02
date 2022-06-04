import styled from '@emotion/styled'
import { Box, Typography, Avatar } from '@mui/material'
import React, { useContext } from 'react'
import { quoute, TestimonialContext } from '.'

const testimonials: quoute[] = [
    {
        testimonial: "One of the most innovative lead-gen platforms I’ve ever seen. It literally gets smarter as you use it.",
        author: "Mitch K.",
        author_company: "Portfolio Director, WeWork",
        author_image: "/assets/people/mitch.png"
    },
    {
        testimonial: "SellX is a superpower that every organization can use to turbocharge their sales in real time.",
        author: "Christian K.",
        author_company: "VC Evangelist & Alliances Manager, Salesforce",
        author_image: "/assets/people/christian.png"
    },
    {
        testimonial: "SellX solves the universal problems revenue teams face when trying to scale quickly. Difficulty finding talent, long hiring cycles & high turnover rates.",
        author: "Asad A.",
        author_company: "Head of Business Development, Uber",
        author_image: "/assets/people/assad.png"
    }
]

function Testimonial() {
    const {id} = useContext(TestimonialContext)
    
  return (
    <CustomBoxContainer className='flex flex-col items-start justify-start w-full' >
        <Typography fontWeight={"medium"} className="text56" variant="h1" fontFamily={`"NeueMontreal", sans-serif`} align="left" width="100%" >
            {testimonials[id].testimonial}
        </Typography>
        <div className="flex InfoContainer flex-row items-center justify-start">
            <Avatar src={testimonials[id].author_image} sx={{height: "60px", width: "60px"}}   alt={testimonials[id].author} />
            <div className="flex flex-col ml-5  info items-start justify-center">
                <Typography fontWeight={"400"} fontSize={"24px"} variant="body1" fontFamily={`"NeueMontreal", sans-serif`} align="left" width="100%" >
                    {testimonials[id].author}
                </Typography>
                <p   style={{  fontFamily:`NeueMontreal, sans-serif`,  color:"#918f8d", fontSize:"16px", fontWeight:"400", textAlign: "left", overflow: "hidden", margin: "0px"}} >
                    {testimonials[id].author_company}
                </p>
            </div> 
        </div>
    </CustomBoxContainer>
  )
}

export default Testimonial

const CustomBoxContainer = styled(Box)`
   
    .InfoContainer{
        margin-top: 82px;
        height: 60px;
        >p{
            margin: 0px !important;
        }
        .info{
            margin-left: 16px;
        }
        width: 80%;
    }
`