import React from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { campaignsList } from '../data';

const Campaigns_Product_Page = () => {
    const { campaignId } = useParams();
    const product = campaignsList.find(item => item.path === campaignId);
  return (
    <Box sx={{ backgroundColor: "#373737" }}>
        <Box sx={{ maxWidth: "1400px", mx: "auto", pt: 15, pb: 44 }}>
            <Typography sx={{ color: "#d9dadb", fontSize: "1.875rem" }}>{product.title}</Typography>
            <Typography sx={{ color: "#d9dadb", mt: 2 }}>{product.description}</Typography>
        </Box>
    </Box>
  )
}

export default Campaigns_Product_Page
