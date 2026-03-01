import React from 'react';
import { Box, Fade, List, ListItem, Typography } from '@mui/material'

const Schedule_Popup = ({ select3, select4, cinemas, languages, setState1, setState2 }) => {
    return (
        <Box sx={{ position: "relative" }}>
            {select4 && (
                <Fade in={select4}>
                    <Box sx={{ position: "relative" }}>
                        <Box sx={{ width: "400px", height: "230px", borderBottomLeftRadius: 5, borderBottomRightRadius: 5, boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)", backgroundColor: "#928f8f", position: "absolute", top: 29, bottom: 0, left: -872, zIndex: 100, zIndex: 100 }}>
                            <Typography sx={{ color: "#c8c6c6", fontStyle: "italic", pl: 2, pt: 1.5 }}>Кинотеатр</Typography>
                            <List>
                                {cinemas.map((option, index) => (
                                    <ListItem key={index} onClick={() => setState2(option)} sx={{ cursor: "pointer", color: "#fff", "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" } }}>{option}</ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                </Fade>
            )}

            {select3 && (
                <Fade in={select3}>
                    <Box sx={{ position: "relative" }}>
                        <Box sx={{ width: "400px", height: "200px", borderBottomLeftRadius: 5, borderBottomRightRadius: 5, boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)", backgroundColor: "#928f8f", position: "absolute", top: 30, bottom: 0, left: -440, zIndex: 100 }}>
                            <Typography sx={{ color: "#c8c6c6", fontStyle: "italic", pl: 2, pt: 1.5 }}>Язык</Typography>
                            <List>
                                {languages.map((option, index) => (
                                    <ListItem key={index} onClick={() => setState1(option)} sx={{ cursor: "pointer", color: "#fff", "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" } }}>{option}</ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                </Fade>
            )}
        </Box>
    )
}

export default Schedule_Popup
