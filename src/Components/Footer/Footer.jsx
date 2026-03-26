import React, { useState } from 'react'
import { Box, IconButton, List, ListItem, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { footerList } from './data';

const Footer = () => {
  const navigate = useNavigate();
  const [linkHover, setLinkHover] = useState(false);
  return (
    <Box sx={{ background: "rgba(134, 49, 42, 1)", height: "auto", py: 4, px: 12 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", flexWrap: "wrap" }}>
        <img style={{ width: "170px", height: "auto" }} src="https://new.parkcinema.az/images/logo.svg" alt="Logo" />
        <List sx={{ display: "flex", flexDirection: "column" }}>
          {footerList.left.map((item, index) => (
            <ListItem key={index} onClick={() => navigate(item.link)} sx={{ color: "#d9dadb", fontSize: "16px", fontWeight: 500, cursor: "pointer", transition: "all 0.3s ease", "&:hover": { color: "#fff" } }}>{item.title}</ListItem>
          ))}
        </List>
        <List sx={{ display: "flex", flexDirection: "column" }}>
          {footerList.center.map((item, index) => (
            <ListItem key={index} sx={{ color: "#d9dadb", fontSize: "16px", fontWeight: 500, cursor: "pointer", transition: "all 0.3s ease", "&:hover": { color: "#fff" } }}>{item}</ListItem>
          ))}
        </List>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography sx={{ fontSize: "17px", color: "#fff" }}>Следите за нами</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 2, mt: 1.2 }}>
            {footerList.right.map((item, index) => (
              <IconButton onClick={() => navigate(item.link)} key={index} sx={{ backgroundColor: "#fff", fontSize: "25px", color: "rgba(213, 43, 30, 1)", "&:hover": { color: "#fff" } }}>
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
        <img src="https://new.parkcinema.az/icons/Visa.svg" alt="" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography sx={{ color: "#d9dadb", fontSize: "15px", fontWeight: 500 }}>© Park Cinema, 2026</Typography>
        <Link to={"https://www.esam-innovations.com/"} onMouseEnter={() => setLinkHover(true)} onMouseLeave={() => setLinkHover(false)} style={{ transition: "all 0.3s ease", color: linkHover ? "#fff" : "#d9dadb", textDecoration: "none" }}>ESAM Innovations</Link>
      </Box>
    </Box>
  )
}

export default Footer
