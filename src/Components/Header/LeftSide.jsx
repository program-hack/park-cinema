import React from 'react';
import { Box, List, ListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { menuList } from './data';

const LeftSide = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "810px" }}>
            <img onClick={() => navigate("/")} style={{ width: "150px", height: "40px", cursor: "pointer" }} src="https://new.parkcinema.az/images/logo.svg" alt="Logo" />
            <List sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2 }}>
                {menuList.map((item, index) => (
                    <ListItem onClick={() => navigate(item.path)} key={index} sx={{ cursor: "pointer", color: "#fff", fontSize: "16px", transition: "all 0.2s ease", "&:hover": { color: "rgba(213, 43, 30, 1)" } }}>{item.title}</ListItem>
                ))}
            </List>
        </Box>
    )
}

export default LeftSide
