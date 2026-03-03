import React from 'react'
import { Box, Typography } from '@mui/material';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocationPinIcon from '@mui/icons-material/LocationPin';

const Block = ({ contact }) => {
  return (
    <Box sx={{ backgroundColor: "#4d4d4d", overflow: "hidden", borderRadius: 3, maxWidth: "290px", width: "100%", height: "150px", px: 2.6, py: 3.5 }}>
      <Typography sx={{ fontSize: "18px", color: "#d9dadb" }}>{contact.name}</Typography>
      <Typography sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1, color: "#d9dadb", mt: 2 }}><WatchLaterIcon /> {contact.work_time}</Typography>
      <Typography sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1, color: "#d9dadb", mt: 1 }}><LocationPinIcon /> {contact.location}</Typography>
    </Box>
  )
}

export default Block
