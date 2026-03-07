import React from 'react';
import { Box, Typography } from '@mui/material';

/* Icons */
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const RightSide = ({ languageOpen, setLanguageOpen, languageState }) => {
    return (
        <Box id={"right-side"} onClick={() => setLanguageOpen(!languageOpen)} sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1.7, cursor: "pointer", userSelect: "none" }}>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1.5, fontWeight: 500, color: "#fff" }}>
                <Box sx={{ width: "28px", height: "28px", borderRadius: "50%", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", objectFit: "cover" }}>
                    <img src={languageState ? languageState.icon : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/330px-Flag_of_Russia.svg.png"} style={{ width: "100%", height: "100%" }} alt="Language Flag" />
                </Box>
                <Typography sx={{ fontWeight: 500 }}>{languageState ? languageState.title : "RU"}</Typography>
            </Box>
            {languageOpen ? <KeyboardArrowUpIcon sx={{ color: "#fff" }} /> : <KeyboardArrowDownIcon sx={{ color: "#fff" }} />}
        </Box>
    )
}

export default RightSide
