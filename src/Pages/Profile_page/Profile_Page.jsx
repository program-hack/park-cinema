import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
import "./main.css";

const Profile_Page = () => {
    return (
        <Box sx={{ backgroundColor: "#373737" }}>
            <Box sx={{ maxWidth: "1400px", mx: "auto", pt: 14, pb: 9 }}>
                <Typography sx={{ color: "#d9dadb", fontSize: "1.875rem" }}>Войти</Typography>
                <Box sx={{ maxWidth: "600px", mx: "auto", mt: 3 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        <Box sx={{ borderBottom: "1px solid #d9dadb", maxWidth: "600px", width: "100%", height: "50px", pl: 1 }}>
                            <input id="input-styles" style={{ width: "100%", height: "100%", color: "#fff", border: "none", outline: "none", background: "none" }} type="gmail" placeholder="Электронная почта" />
                        </Box>
                        <Box sx={{ borderBottom: "1px solid #d9dadb", maxWidth: "600px", width: "100%", height: "50px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1, px: 1 }}>
                            <input id="input-styles" style={{ width: "100%", height: "100%", color: "#fff", border: "none", outline: "none", background: "none" }} type="password" placeholder="Пароль" />
                            <RemoveRedEyeIcon sx={{ color: "#fff" }} />
                        </Box>
                        <Link style={{ color: "#d9dadb", fontSize: "15px", textDecoration: "none", display: "flex", justifyContent: "flex-end", marginTop: -12 }}>Забыли пароль?</Link>
                    </Box>
                    <Button sx={{ backgroundColor: "rgba(213, 43, 30, 1)", color: "#fff", textTransform: "inherit", borderRadius: 50, width: "100%", height: "45px", transition: "all 0.3s ease", opacity: 0.7, mt: 5, "&:hover": { opacity: 1 } }}>Войти</Button>
                    <Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", gap: 1, mt: 2.3 }}>Новичок здесь? <Link to={"/"} style={{ color: "#fff" }}>Регистрация</Link></Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Profile_Page
