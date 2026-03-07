import React from 'react'
import { Box } from '@mui/material';
import { carouselComponents } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules'
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import './main.css';

import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

/* Icons */
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = () => {
    const navigate = useNavigate();
    return (
        <Swiper
            modules={[Navigation, EffectFade]}
            slidesPerView={1}
            navigation={{
                nextEl: '.my-next-button',
                prevEl: null,
            }}
            loop
            effect="fade"
            speed={800}
            fadeEffect={{
                crossFade: true
            }}
        >
            {carouselComponents.map((picture, index) => (
                <SwiperSlide id={"carousel-box"} key={index}>
                    <img id={"carousel-image"} src={picture.picture} alt="Picture" />
                    <Box id={"carousel-image"} onClick={() => navigate(`/movie/${picture.link}`)} sx={{ height: "100%", width: "100%", cursor: "pointer", background: "linear-gradient(to bottom, black 0%, transparent 40%, transparent 60%, black 100%)", position: "absolute", top: 0, bottom: 0, right: 0, left: 0, zIndex: 99 }}></Box>
                </SwiperSlide>
            ))}
            <Box
                id={"next-button"}
                className={"my-next-button"}
                sx={{
                    position: "absolute",
                    width: "70px",
                    height: "230px",
                    bottom: "70%",
                    left: "auto",
                    right: 0,
                    top: "30%",
                    borderTopLeftRadius: 400,
                    borderBottomLeftRadius: 400,
                    zIndex: 99,
                    background: "rgba(20, 20, 20, 0.65)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    pl: 1,
                }}>
                <ArrowForwardIosIcon id={"next-button-icon"} sx={{ color: "#c3c3c3", fontSize: "40px" }} />
            </Box>
        </Swiper>
    )
}

export default Carousel
