import React, { useState } from 'react';
import { Box, Fade, Grid, Slide, Typography } from '@mui/material'
import { hiddenMenuList } from './data';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

/* Icons */
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#D9DADB",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const HiddenMenu = ({ hiddenMenuOpen, setHiddenMenuOpen }) => {
  const navigate = useNavigate();
  const [languageOpen, setLanguageOpen] = useState(false);
  const [languageState, setLanguageState] = useState('');
  return (
    <Fade in={hiddenMenuOpen} timeout={300} unmountOnExit mountOnEnter>
      <Box onClick={() => setHiddenMenuOpen(false)} sx={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0, zIndex: 999, backgroundColor: "rgba(0, 0, 0, 0.5)", height: "100%", width: "100%" }}>
        <Slide
          addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false);
          }}
          timeout={{ enter: 400, exit: 400 }}
          onEnter={() => setHiddenMenuOpen(true)}
          onExit={() => setHiddenMenuOpen(false)}
          in={hiddenMenuOpen}
          direction="up"
        >
          <Box id={"hidden-menu-content"} onClick={(e) => e.stopPropagation()} sx={{ width: "100%", position: "relative", top: 135, bottom: 0, left: 0, right: 0, maxHeight: "500px", height: hiddenMenuOpen ? "100%" : "0%", py: 1, backgroundColor: "#313131da", borderTopLeftRadius: 20, borderTopRightRadius: 20, overflow: "hidden" }}>

            <Box sx={{ borderRadius: 50, width: "70px", height: "4px", mx: "auto", bgcolor: "#6b6b6b" }}></Box>

            <Box sx={{ flexGrow: 1, px: 2, mt: 3 }}>
              <Grid container spacing={1.4}>
                {hiddenMenuList.map((item, index) => (
                  <Grid key={index} size={item.size}>
                    <Item onClick={() => navigate(item.link)} sx={{ display: "flex", justifyContent: item.justify, alignItems: "center", gap: 1.2, height: "60px", borderRadius: 2, overflow: "hidden" }}>
                      <img style={{ width: item.width, height: "auto" }} src={item.icon} alt="Icon" />
                      <Typography sx={{ fontSize: "16px", color: "#202735" }}>{item.title}</Typography>
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box onClick={() => setLanguageOpen(!languageOpen)} sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1.7, cursor: "pointer", userSelect: "none", ml: 2, mt: 2, width: "100px" }}>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1.5, fontWeight: 500, color: "#fff" }}>
                <Box sx={{ width: "28px", height: "28px", borderRadius: "50%", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", objectFit: "cover" }}>
                  <img src={languageState ? languageState.icon : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/330px-Flag_of_Russia.svg.png"} style={{ width: "100%", height: "100%" }} alt="Language Flag" />
                </Box>
                <Typography sx={{ fontWeight: 500 }}>{languageState ? languageState.title : "RU"}</Typography>
              </Box>
              {languageOpen ? <KeyboardArrowUpIcon sx={{ color: "#fff" }} /> : <KeyboardArrowDownIcon sx={{ color: "#fff" }} />}
            </Box>

          </Box>
        </Slide>
      </Box>
    </Fade>
  )
}

export default HiddenMenu
