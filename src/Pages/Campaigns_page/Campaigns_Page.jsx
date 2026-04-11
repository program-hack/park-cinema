import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material'
import { campaignsList } from './data';
import Block from './Campaigns_Page_Components/Block';
import LinearDeterminate from '../../LinearDeterminate';
import Picture from "../../Wedges@1x-3.0s-200px-200px.svg";
import "./main.css";


const Campaigns_Page = () => {
  const [loading, setLoading] = useState("");
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowImage(false);
      setLoading(
        <Box sx={{ backgroundColor: "#373737" }}>
          <Box sx={{ maxWidth: "1400px", mx: "auto", pt: 14, pb: 9 }}>
            <Typography id={"campaigns-page-title"} sx={{ color: "#fff", fontSize: "1.875rem" }}>Акции</Typography>
            <Box id={"campaigns-page-products"} sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "start", gap: 2.2, mt: 3 }}>
              {campaignsList.map((item, index) => (
                <Block key={index} item={item} />
              ))}
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

export default Campaigns_Page
