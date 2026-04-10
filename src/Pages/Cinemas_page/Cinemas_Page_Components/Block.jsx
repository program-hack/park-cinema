import React from 'react'
import { Box, Typography } from '@mui/material';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router-dom';

const Block = ({ cinema }) => {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate(`/cinemas/${cinema.path}`)} id={"cinemas-page-box"} sx={{ maxWidth: "420px", maxHeight: "535px", height: "100%", px: 2, pt: 1, pb: 2.5, borderRadius: 5, backgroundColor: "#4d4d4d", cursor: "pointer", "&:hover": { backgroundColor: "rgba(72, 71, 71, 1)", transition: "all 0.2s ease" }, transition: "all 0.2s ease" }}>
      <Box sx={{ maxHeight: "300px", maxHeight: "300px", width: "100%", height: "100%", overflow: "hidden", objectFit: "cover", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img style={{ width: "100%", height: "auto" }} src={cinema.image} alt="Picture" />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", gap: 1.4, pb: cinema.pb }}>
        <Typography sx={{ fontSize: "1.125rem", color: "#d9dadb", mt: 0.6 }}>{cinema.title}</Typography>
        <Typography sx={{ color: "#d9dadb", display: "flex", alignItems: "center", gap: 1 }}><WatchLaterIcon /> {cinema.work_times}</Typography>
        <Typography sx={{ color: "#d9dadb", display: "flex", alignItems: "center", gap: 1 }}><LocationPinIcon /> {cinema.location}</Typography>
        <Typography sx={{ color: "#d9dadb", display: "flex", alignItems: "center", gap: 1 }}><PhoneIcon /> {cinema.phone}</Typography>
        <Typography sx={{ color: "#d9dadb" }}>{cinema.bif_description}</Typography>
      </Box>
    </Box>
  )
}

export default Block
