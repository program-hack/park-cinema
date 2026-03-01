import React, { useState } from 'react';
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Products = ({ product }) => {
    const navigate = useNavigate();
    const [imageHover, setImageHover] = useState(false);
    return (
        <Box onClick={() => navigate(`/movie/${product.path}`)} sx={{ position: "relative" }}>
            <Box sx={{ maxWidth: "310px", maxHeight: "462px", height: "100%", width: "100%", borderRadius: 5, cursor: "pointer", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", objectFit: "cover" }}>
                <img style={{ width: "100%", height: "100%", scale: imageHover ? 1.1 : 1, transition: "all 0.3s ease" }} src={product.image} alt="" />
            </Box>
            <Box onMouseEnter={() => setImageHover(true)} onMouseLeave={() => setImageHover(false)} sx={{ maxWidth: "310px", width: "100%", height: "100%", background: "linear-gradient(to top, black, transparent)", borderRadius: 5, overflow: "hidden", position: "absolute", top: 0, left: 0, right: 0, bottom: -10, zIndex: 99, cursor: "pointer" }}>
                <Box sx={{ color: "#fff", backgroundColor: "rgba(213, 43, 30, 1)", fontSize: "15.5px", fontWeight: 600, height: "40px", width: "180px", rotate: "45deg", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", position: "absolute", left: "auto", right: -40, top: 30, bottom: 0, visibility: product.pre_sale ? "visible" : "hidden" }}>Предпродажа</Box>
                <Box sx={{ mt: product.top, px: 1.6, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography sx={{ color: "#fff", fontSize: "22px", fontWeight: 600, width: "290px" }}>{product.title}</Typography>
                        <Typography sx={{ fontSize: "14px", color: "#d9dadb", mt: 1.5 }}>{product.date}</Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography sx={{ fontSize: "14px", color: "#d9dadb", mt: 0.5 }}>{product.age}</Typography>
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1 }}>
                                {product.flags.map((flag, index) => (
                                    <img style={{ width: "30px", height: "30px", borderRadius: "50%", objectFit: "cover", display: "flex", justifyContent: "center", alignItems: "center" }} src={flag} alt="Flag" key={index} />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Products
