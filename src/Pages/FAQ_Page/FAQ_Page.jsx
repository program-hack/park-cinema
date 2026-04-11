import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Left_Accordion from './FAQ_Page_Components/Left_Accordion'
import Right_Accordion from './FAQ_Page_Components/Right_Accordion'
import LinearDeterminate from '../../LinearDeterminate';
import Picture from "../../Wedges@1x-3.0s-200px-200px.svg";
import "./main.css";

const FAQ_Page = () => {
    const [loading, setLoading] = useState("");
    const [showImage, setShowImage] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setShowImage(false);
        setLoading(
            <Box sx={{ backgroundColor: "#373737" }}>
                <Box id={"faq-content"} sx={{ pt: 18, pb: 20, maxWidth: "1400px", mx: "auto" }}>
                    <Typography id={"faq-title"} sx={{ color: "#fff", fontSize: "1.875rem", fontWeight: 700 }}>FAQ</Typography>
                    <Box id={"faq-container"}>
                        <Left_Accordion />
                        <Right_Accordion />
                    </Box>
                </Box>
            </Box>
        )
        }, 2500)
    }, [])
    return (
        <>
            {showImage ? (
                <>
                    <LinearDeterminate />
                    <Box sx={{ bgcolor: "#000", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", userSelect: "none" }}>
                        <img src={Picture} alt="Loading..." />
                    </Box>
                </>
            ) : (
                <>
                    {loading}
                </>
            )}
        </>
    )
}

export default FAQ_Page
