import React, { useState } from 'react'
import { Box } from '@mui/material';
import Register_Box from './Register_Box/Register_Box';
import Login_Box from './Login_Box/Login_Box';
import "./main.css";

const Profile_Page = () => {
    const [registerBtn, setRegisterBtn] = useState(false);
    return (
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
}

export default Profile_Page
