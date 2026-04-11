import React, { useEffect, useState } from 'react'
import { Box } from "@mui/material";
import { cinemasData } from './data';
import Block from './Cinemas_Page_Components/Block';
import LinearDeterminate from '../../LinearDeterminate';
import Picture from "../../Wedges@1x-3.0s-200px-200px.svg";
import "./main.css";


const Cinemas_Page = () => {
  const [loading, setLoading] = useState("");
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowImage(false);
      setLoading(
        <Box sx={{ backgroundColor: "#373737" }}>
          <Box id={"cinemas-page-products-box"} sx={{ maxWidth: "1400px", mx: "auto", pt: 14, pb: 9, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", alignItems: "start", gap: 2 }}>
            {cinemasData.map((cinema, index) => (
              <Block key={index} cinema={cinema} />
            ))}
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

export default Cinemas_Page
