import React from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { cinemasData } from '../data';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import PhoneIcon from '@mui/icons-material/Phone';
import Schedule from '../../Home/Home_Components/Content/Schedule/Schedule';

const Cinemas_Product_Page = () => {
    const { cinemaId } = useParams();
    const product = cinemasData.find(cinema => cinema.path === cinemaId);
    return (
        <Box sx={{ backgroundColor: "#373737" }}>
            <Box sx={{ width: "100%", maxHeight: "410px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                <img style={{ width: "100%", height: "auto" }} src="https://new.parkcinema.az/_next/image?url=%2Fimages%2Fcinema2.png&w=2048&q=75" alt="" />
            </Box>
            <Box sx={{ maxHeight: "410px", mx: "auto", px: 9, display: "flex", flexDirection: "column", alignItems: "start", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0, 0, 0, 0.55)" }}>
                <Typography sx={{ fontSize: "40px", color: "#d9dadb", mt: 14.5 }}>{product.title}</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1.4, mt: 3 }}>
                    <Typography sx={{ display: "flex", alignItems: "center", gap: 1, color: "#d9dadb" }}><WatchLaterIcon /> {product.work_times}</Typography>
                    <Typography sx={{ display: "flex", alignItems: "center", gap: 1, color: "#d9dadb" }}><LocationPinIcon /> {product.location}</Typography>
                    <Typography sx={{ display: "flex", alignItems: "center", gap: 1, color: "#d9dadb" }}><PhoneIcon /> {product.phone}</Typography>
                </Box>
                <Typography sx={{ color: "#d9dadb", mt: 4 }}>{product.description}</Typography>
            </Box>
            <Box sx={{ maxWidth: "1400px", mx: "auto", pb: 9 }}>
                <Schedule />
            </Box>
        </Box>
    )
}

export default Cinemas_Product_Page
