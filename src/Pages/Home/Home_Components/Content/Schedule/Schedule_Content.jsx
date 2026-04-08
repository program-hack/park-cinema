import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { moviesList } from './data'

const Schedule_Content = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
            {moviesList.map(movie => (
                <Box id={"schedule-item"} key={movie.id} sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #fff", py: 1.8 }}>
                    <Typography sx={{ color: "#fff", fontSize: "14px", textAlign: "center" }}>{movie.time}</Typography>
                    <Box sx={{ maxWidth: "200px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#fff", fontSize: "14px", textAlign: "center" }}>{movie.movie_name}</Typography>
                    </Box>
                    <Box sx={{ maxWidth: "200px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#fff", fontSize: "14px", textAlign: "center" }}>{movie.place}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2 }}>
                        <Typography sx={{ color: "#fff", fontSize: "14px", textAlign: "center" }}>{movie.movie_type}</Typography>
                        <Box sx={{ maxWidth: "25px", height: "25px", objectFit: "cover", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 50, overflow: "hidden" }}>
                            <img style={{ width: "100%", height: "100%" }} src={movie.movie_language} alt="Picture" />
                        </Box>
                    </Box>
                    <Typography sx={{ border: "1px solid #fff", borderRadius: 5, px: 2, py: 1, fontSize: "13.5px", color: "#fff", textAlign: "center", width: "56px" }}>{movie.movie_subtitle} <br /> sub</Typography>
                    <Button sx={{ borderRadius: 50, backgroundColor: "rgba(213, 43, 30, 1)", textTransform: "inherit", color: "#fff", fontWeight: 600, px: 2.5, py: 1.2 }}>Купить билет</Button>
                </Box>
            ))}
        </Box>
    )
}

export default Schedule_Content
