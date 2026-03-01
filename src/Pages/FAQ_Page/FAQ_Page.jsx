import { Box, Typography } from '@mui/material'
import React from 'react'
import Left_Accordion from './FAQ_Page_Components/Left_Accordion'
import Right_Accordion from './FAQ_Page_Components/Right_Accordion'

const FAQ_Page = () => {
    return (
        <Box sx={{ backgroundColor: "#373737" }}>
            <Box sx={{ pt: 18, pb: 20, maxWidth: "1400px", mx: "auto" }}>
                <Typography sx={{ color: "#fff", fontSize: "1.875rem", fontWeight: 700 }}>FAQ</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", rowGap: 7, mt: 4 }}>
                    <Left_Accordion />
                    <Right_Accordion />
                </Box>
            </Box>
        </Box>
    )
}

export default FAQ_Page
