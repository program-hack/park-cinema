import React, { useState } from 'react';
import { Box, Fade } from "@mui/material";
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import LanguagePopup from './LanguagePopup';
import "./main.css";

const Header = () => {
    const [languageOpen, setLanguageOpen] = useState(false);
    const [languageState, setLanguageState] = useState('');
    return (
        <Box sx={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 999, height: "60px" }}>
            <Box id={"header-inner"} sx={{ maxWidth: "1400px", mx: "auto", px: 5, py: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <LeftSide />
                    <RightSide setLanguageOpen={setLanguageOpen} languageOpen={languageOpen} languageState={languageState} />
                </Box>
                <Fade in={languageOpen}>
                    <Box sx={{ position: "relative" }}>
                        <LanguagePopup languageOpen={languageOpen} setLanguageOpen={setLanguageOpen} setLanguageState={setLanguageState} />
                    </Box>
                </Fade>
            </Box>
        </Box>
    )
}

export default Header
