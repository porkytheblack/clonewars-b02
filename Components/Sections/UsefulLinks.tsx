import { Grid, Typography } from '@mui/material'
import React from 'react'
import NavbarButton from '../Buttons/NavbarButton'

function UsefulLinks({header, links}: {header: string, links: {title: string, url: string}[]}) {
  return (
    <Grid xl={12} item >
         <Typography borderBottom={"1px solid #3e3e3c"} paddingBottom={"10px"} className="uppercase" color="white" fontWeight={"300"} fontSize={"20px"} variant="h6" fontFamily={`"NeueMontreal-300", sans-serif`} align="center" width="100%" >
                {header}
        </Typography>
        {/* loop through the links  */}
        {links.map((link, index) => {
            return (
                <Grid key={index} xl={12} item >
                    <NavbarButton>
                        {link.title}
                    </NavbarButton>
                    </Grid>
            )
        })}
    </Grid>
  )
}

export default UsefulLinks

