import React from 'react';
import { Box, Typography } from '@mui/material'
import { campaignsList } from './data';
import Block from './Campaigns_Page_Components/Block';

const Campaigns_Page = () => {
  return (
    <Box sx={{ backgroundColor: "#373737" }}>
      <Box sx={{ maxWidth: "1400px", mx: "auto", pt: 14, pb: 9 }}>
        <Typography sx={{ color: "#fff", fontSize: "1.875rem" }}>Акции</Typography>
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "start", gap: 2.2, mt: 3 }}>
          {campaignsList.map((item, index) => (
            <Block key={index} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Campaigns_Page
