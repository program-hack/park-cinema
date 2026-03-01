import React from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Block = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate(`/campaigns/${item.path}`)} sx={{ maxWidth: "430px", maxHeight: "300px", width: "100%", height: "auto", borderRadius: 3, overflow: "hidden", backgroundColor: "rgba(77, 77, 77, 1)", pt: 2, pb: 2.8, px: 1.5, cursor: "pointer" }}>
      <Box sx={{ maxWidth: "425px", maxHeight: "250px", display: "flex", justifyContent: "center", alignItems: "center", objectFit: "cover", overflow: "hidden", width: "100%", height: "auto", mx: "auto", borderRadius: 2 }}>
        <img style={{ width: "100%", height: "auto" }} src={item.image} alt="Picture" />
      </Box>
      <Typography sx={{ color: "#fff", fontSize: "1.125rem", mt: 1.7, pl: 0.9 }}>{item.title}</Typography>
    </Box>
  )
}

export default Block
