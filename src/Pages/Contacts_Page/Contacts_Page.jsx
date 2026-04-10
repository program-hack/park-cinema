import React, { useEffect, useState } from 'react'
import { Box, Typography } from "@mui/material";
import { bottomMenuList, contactsList } from './data';
import Block from './Contacts_Page_Components/Block';
import { Link } from 'react-router-dom';
import LinearDeterminate from '../../LinearDeterminate';
import Picture from "../../Wedges@1x-3.0s-200px-200px.svg";
import "./main.css";

const Contacts_Page = () => {
    const [loading, setLoading] = useState("");
    const [showImage, setShowImage] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowImage(false);
            setLoading(
                <Box sx={{ backgroundColor: "#373737" }}>
                    <Box id={"contacts-page-container"}>
                        <Typography id={"contacts-page-title"} sx={{ color: "#fff", fontSize: "1.875rem" }}>Контакты</Typography>
                        <Box id={"contacts-page-blocks"} >
                            {contactsList.map((contact, index) => (
                                <Block key={index} contact={contact} />
                            ))}
                        </Box>
                        <Box id={"contacts-page-bottom-menu"}>
                            {bottomMenuList.map((item, index) => (
                                <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "start", gap: 2 }}>
                                    <Typography sx={{ color: "#d9dadb", fontSize: "1.125rem", mb: 1.5, width: "250px" }}>{item.title}</Typography>
                                    {item.subMenu?.top && (
                                        <Link style={{ color: "#d9dadb", fontSize: "17px", textDecoration: "none", display: "flex", alignItems: "center", gap: 6.5 }}>{item.subMenu.top.icon} {item.subMenu.top.name}</Link>
                                    )}
                                    {item.subMenu?.center && (
                                        <Link style={{ color: "#d9dadb", fontSize: "17px", textDecoration: "none", display: "flex", alignItems: "center", gap: 6.5 }}>{item.subMenu.center.icon} {item.subMenu.center.name}</Link>
                                    )}
                                    {item.subMenu?.bottom && (
                                        <Link style={{ color: "#d9dadb", fontSize: "17px", textDecoration: "none", display: "flex", alignItems: "center", gap: 6.5 }}>{item.subMenu.bottom.icon} {item.subMenu.bottom.name}</Link>
                                    )}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            )
        }, 2500)
    }, [])
    return (
        <>
            {showImage ?
                (
                    <>
                        <LinearDeterminate />
                        <Box sx={{ bgcolor: "#000", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                            <img src={Picture} alt="Loading..." />
                        </Box>
                    </>
                ) : (
                    <>
                        {loading}
                    </>
                )
            }
        </>
    )
}

export default Contacts_Page
