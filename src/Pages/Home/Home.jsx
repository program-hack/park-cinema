import React, { useState } from 'react';
import { Box } from '@mui/material';
import Carousel from './Home_Components/Carousel/Carousel';
import Content from './Home_Components/Content/Content';

/* Icons */
import MenuIcon from '@mui/icons-material/Menu';
import HiddenMenu from '../../Components/Header/HiddenMenu';

const Home = () => {
  const [hiddenMenuOpen, setHiddenMenuOpen] = useState(false);
  return (
    <>
      <Carousel />
      <Content />
      <Box id="hidden-menu-button" onClick={() => setHiddenMenuOpen(true)} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", color: "#fff", mr: -3, userSelect: "none", position: "fixed", zIndex: 999, top: "90%", bottom: 0, left: 14, right: 0, cursor: "pointer", bgcolor: "#ff00004a", maxWidth: "50px", maxHeight: "50px", backdropFilter: "blur(5px)", borderRadius: 50, border: "1px solid #fff", overflow: "hidden" }}>
        <MenuIcon sx={{ pt: 1.3, pl: 0.2, fontSize: "28px" }} />
      </Box>
      {hiddenMenuOpen && <HiddenMenu hiddenMenuOpen={hiddenMenuOpen} setHiddenMenuOpen={setHiddenMenuOpen} />}
    </>
  )
}

export default Home
