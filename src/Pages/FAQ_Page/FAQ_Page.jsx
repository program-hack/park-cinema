import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Left_Accordion from './FAQ_Page_Components/Left_Accordion'
import Right_Accordion from './FAQ_Page_Components/Right_Accordion'
import LinearDeterminate from '../../LinearDeterminate';
import Picture from "../../Wedges@1x-3.0s-200px-200px.svg";

const FAQ_Page = () => {
    const [loading, setLoading] = useState("");
    const [showImage, setShowImage] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setShowImage(false);
        setLoading(
            <Box sx={{ backgroundColor: "#373737" }}>
                <Box sx={{ pt: 18, pb: 20, maxWidth: "1400px", mx: "auto" }}>
                    <Typography sx={{ color: "#fff", fontSize: "1.875rem", fontWeight: 700 }}>FAQ</Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", rowGap: 7, mt: 4 }}>
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
                    <Box sx={{ bgcolor: "#000", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
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
