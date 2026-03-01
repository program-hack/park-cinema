import React from 'react'
import { Box } from "@mui/material";
import { cinemasData } from './data';
import Block from './Cinemas_Page_Components/Block';

const Cinemas_Page = () => {
  return (
    <Box sx={{ backgroundColor: "#373737" }}>
        <Box sx={{ maxWidth: "1400px", mx: "auto", pt: 14, pb: 9, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "start", gap: 2 }}>
            {cinemasData.map((cinema, index) => (
                <Block key={index} cinema={cinema} />
            ))}
        </Box>
    </Box>
  )
}

export default Cinemas_Page
