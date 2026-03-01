import React from 'react';
import { Box } from '@mui/material'
import { languageList } from './data';

const LanguagePopup = ({ languageOpen, setLanguageState }) => {
    return (
        <>
            {languageOpen && (
                <Box 
                    sx={{
                        width: "100px",
                        height: "130px",
                        py: 1,
                        borderRadius: 3,
                        backgroundColor: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        bottom: 0,
                        gap: 1.6,
                        top: 5,
                        left: "auto",
                        right: 0
                    }}
                >
                    {languageList.map((item, index) => (
                        <Box onClick={() => setLanguageState({ id: item.id, icon: item.icon, title: item.title })} key={index} sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2, cursor: "pointer" }}>
                            <Box sx={{ width: "30px", height: "30px", borderRadius: "50%", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", objectFit: "cover" }}>
                                <img key={index} style={{ width: "100%", height: "100%", boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)" }} src={item.icon} alt="Flag" />
                            </Box>
                            {item.title}
                        </Box>
                    ))}
                </Box>
            )}
        </>
    )
}

export default LanguagePopup
