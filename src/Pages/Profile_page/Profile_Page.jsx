import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import Register_Box from './Register_Box/Register_Box';
import Login_Box from './Login_Box/Login_Box';
import LinearDeterminate from '../../LinearDeterminate';
import Picture from "../../Wedges@1x-3.0s-200px-200px.svg";
import "./main.css";

const Profile_Page = () => {
    const [registerBtn, setRegisterBtn] = useState(false);

    const [loading, setLoading] = useState("");
    const [showImage, setShowImage] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowImage(false);
            setLoading(
                <Box sx={{ backgroundColor: "#373737" }}>
                    <Box sx={{ maxWidth: "1400px", mx: "auto", pt: 14, pb: 9 }}>
                        {registerBtn ? (
                            <Register_Box />
                        ) : (
                            <Login_Box setRegisterBtn={setRegisterBtn} />
                        )}
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

export default Profile_Page
