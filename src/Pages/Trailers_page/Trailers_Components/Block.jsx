import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "../main.css";

/* Icons */
import EastIcon from '@mui/icons-material/East';

const Block = ({ item }) => {
    const navigate = useNavigate();
    return (
        <Box id={"trailer-box"} sx={{ minWidth: "920px", height: "auto", borderRadius: 5, backgroundColor: "#373737", overflow: "hidden" }}>
            <Box id={"video-box"} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {item.video}
            </Box>
            <Box sx={{ px: 2, pt: 1, pb: 2 }}>
                <Box id={"trailer-info"} sx={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography sx={{ fontSize: "15px", color: "#fff" }}>{item.title}</Typography>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", columnGap: 1.5 }}>
                            <Typography id={"trailer-theme"} sx={{ color: "#fff", fontSize: "15px" }}>{item.theme}</Typography>
                            {item.languages.map((language, index) => (
                                <Box key={index} sx={{ width: "20px", height: "20px", borderRadius: 50, overflow: "hidden", objectFit: "cover", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <img style={{ width: "100%", height: "100%" }} src={language} alt="" />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Button onClick={() => navigate(`/movie/${item.link}`)} sx={{ backgroundColor: "#D52B1E", borderRadius: 20, color: "#fff", textTransform: "inherit", px: 3.2, opacity: 0.8, transition: "all 0.2s ease", "&:hover": { opacity: 1 } }}>Купить билет</Button>
                </Box>
                <Box sx={{ cursor: "pointer", color: "#fff", display: "flex", flexDirection: "row", alignItems: "center", gap: 1, mt: 1 }}>
                    Синопсис <EastIcon sx={{ fontSize: "18px", pt: 0.3 }} />
                </Box>
            </Box>
        </Box>
    )
}

export default Block
