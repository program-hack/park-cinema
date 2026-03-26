import React from 'react'
import { Box, Typography } from '@mui/material'
import { trailersList } from './data'
import Block from './Trailers_Components/Block'
import { Link } from 'react-router-dom'

const Trailers_Page = () => {
  return (
    <Box sx={{ backgroundColor: "#5f5f5f" }}>
      <Box sx={{ backdropFilter: "blur(24px)", bgcolor: "rgba(255, 255, 255, 0.2)", width: "100%", position: "fixed", top: 0, bottom: 0, left: 0, right: 0, zIndex: 999, height: "100%", maxHeight: "90px"
      }}>
        <Box sx={{ maxWidth: "860px", mx: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%" }}>
          <Link
            id={"link"}
            to={"/"}
          >
            <Typography
              sx={{ fontSize: "25px", color: "#fff", }}
              id={"text"}
            >
              Список
            </Typography>
          </Link>
          <Link
            id={"link"}
            to={"/trailers"}
          >
            <Typography
              sx={{ fontSize: "25px", color: "#fff", }}
              id={"text"}
            >
              Трейлеры
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box sx={{ maxWidth: "1400px", mx: "auto", pt: 22, pb: 9, display: "flex", flexDirection: "column", alignItems: "center", rowGap: 10 }}>
        {trailersList.map((item, index) => (
          <Block key={index} item={item} />
        ))}
      </Box>
    </Box>
  )
}

export default Trailers_Page
