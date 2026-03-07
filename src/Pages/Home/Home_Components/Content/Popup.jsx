import React from 'react';
import { Box, Fade, List, ListItem, Typography } from '@mui/material'

const Popup = ({ select1, select2, setState1, setState2 }) => {
    const languages = [
        "AZ", "TR", "RU", "EN"
    ]
    const cinemas = [
        "Park Bulvar", "Metro Park", "Flame Towers", "Sevinc Mall", "Shahdag"
    ]
    return (
        <>
            {select1 && (
                <Fade in={select1}>
                    <Box sx={{ position: "relative" }}>
                        <Box id={"left-popup"} sx={{ width: "400px", height: "200px", borderBottomLeftRadius: 5, borderBottomRightRadius: 5, boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)", backgroundColor: "#928f8f", position: "absolute", top: -32, bottom: 0, zIndex: 100 }}>
                            <Typography sx={{ color: "#c8c6c6", fontStyle: "italic", pl: 2, pt: 1.5 }}>Язык</Typography>
                            <List>
                                {languages.map((option, index) => (
                                    <ListItem onClick={() => setState1(option)} key={index} sx={{ cursor: "pointer", color: "#fff", "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" } }}>{option}</ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                </Fade>
            )}

            {select2 && (
                <Fade in={select2}>
                    <Box sx={{ position: "relative" }}>
                        <Box id={"right-popup"} sx={{ width: "400px", height: "230px", borderBottomLeftRadius: 5, borderBottomRightRadius: 5, boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)", backgroundColor: "#928f8f", position: "absolute", top: -32, bottom: 0, left: "30rem", zIndex: 100 }}>
                            <Typography sx={{ color: "#c8c6c6", fontStyle: "italic", pl: 2, pt: 1.5 }}>Кинотеатр</Typography>
                            <List>
                                {cinemas.map((option, index) => (
                                    <ListItem onClick={() => setState2(option)} key={index} sx={{ cursor: "pointer", color: "#fff", "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" } }}>{option}</ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                </Fade>
            )}
        </>
    )
}

export default Popup
