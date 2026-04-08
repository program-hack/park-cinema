import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Schedule_Content from './Schedule_Content';
import Schedule_Popup from './Schedule_Popup';
import "../main.css";

import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

/* Icons */
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


const Schedule = ({ setSelect3, setSelect4, select3, select4, languages, cinemas }) => {
    const [state1, setState1] = useState('');
    const [state2, setState2] = useState('');

    const datesList = [
        {
            id: 1,
            month: "Feb",
            number: 27
        },
        {
            id: 2,
            month: "Feb",
            number: 28
        },
        {
            id: 3,
            month: "Mar",
            number: 1
        },
        {
            id: 4,
            month: "Mar",
            number: 2
        },
        {
            id: 5,
            month: "Mar",
            number: 3
        },
        {
            id: 6,
            month: "Mar",
            number: 4
        },
        {
            id: 7,
            month: "Mar",
            number: 5
        },
        {
            id: 8,
            month: "Mar",
            number: 6
        },
        {
            id: 9,
            month: "Mar",
            number: 7
        },
        {
            id: 10,
            month: "Mar",
            number: 8
        },
        {
            id: 11,
            month: "Mar",
            number: 9
        },
        {
            id: 12,
            month: "Mar",
            number: 10
        },
    ];

    return (
        <Box sx={{ mt: 7 }}>
            <Box id={"schedule-box"} sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
                <Swiper
                    id={"schedule-swiper"}
                    modules={[Navigation]}
                    slidesPerView={3}
                    longSwipesRatio={true}
                    spaceBetween={20}
                    loop={true}
                    navigation={true}
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                        '--swiper-navigation-size': '20px'
                    }}
                >
                    {datesList.map((date, index) => (
                        <SwiperSlide key={index} style={{ height: "120px", maxWidth: "69px", borderRadius: 50, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#474747", cursor: "pointer" }}>
                            <Typography sx={{ color: "#fff", fontSize: "16px", fontWeight: 600, display: "flex", justifyContent: "center", alignItems: "center" }}>{date.month}</Typography>
                            <Typography sx={{ color: "#fff", fontSize: "15px", fontWeight: 500, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#606060", width: "55px", height: "55px", borderRadius: 10, mt: 1.5 }}>{date.number}</Typography>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Box id={"schedule-filters"} sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }}>
                    <Box onClick={() => setSelect4(!select4)} id={"select"}>
                        <Typography sx={{ fontSize: "17px", color: "#fff", fontStyle: "italic", width: "370px", display: "flex", justifyContent: "center", alignItems: "center", userSelect: "none" }}>{state2 ? state2 : "Кинотеатры"}</Typography>
                        {select4 ? <ArrowDropUpIcon sx={{ color: "#fff" }} /> : <ArrowDropDownIcon sx={{ color: "#fff" }} />}
                    </Box>

                    <Box onClick={() => setSelect3(!select3)} id={"select"}>
                        <Typography sx={{ fontSize: "17px", color: "#fff", fontStyle: "italic", width: "370px", display: "flex", justifyContent: "center", alignItems: "center", userSelect: "none" }}>{state1 ? state1 : "Язык"}</Typography>
                        {select3 ? <ArrowDropUpIcon sx={{ color: "#fff" }} /> : <ArrowDropDownIcon sx={{ color: "#fff" }} />}
                    </Box>
                </Box>

                <Schedule_Popup setSelect3={setSelect3} select3={select3} setSelect4={setSelect4} select4={select4} cinemas={cinemas} languages={languages} setState1={setState1} setState2={setState2} />
            </Box>

            <Schedule_Content />
        </Box>
    )
}

export default Schedule
