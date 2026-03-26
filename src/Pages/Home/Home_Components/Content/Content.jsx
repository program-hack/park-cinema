import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import SelectBox from './SelectBox';
import { productsList } from './data';
import Products from './Products';
import Schedule from './Schedule/Schedule';
import "./main.css";

const Content = ({ setSelect3, setSelect4, select3, select4, languages, cinemas }) => {
    const [select1, setSelect1] = useState(false);
    const [select2, setSelect2] = useState(false);
    const [filter, setFilter] = useState('');

    const [schedule, setScheduleClick] = useState(null);

    const filterProducts = productsList.filter(movie => {
        if (filter === 'soon') return !movie.is_released;
        if (filter === 'all') return true;
        return true;
    });
    return (
        <Box sx={{ backgroundColor: "rgba(55, 55, 55, 1)", py: 7 }}>
            <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
                <Box id={"content-menu"} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "880px", mx: "auto" }}>
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

                <Box id={"content-buttons-list"} sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 5, mt: 6 }}>
                    <Box sx={{ position: "relative" }}>
                        <Link onClick={() => {
                            setFilter('all');
                            setScheduleClick(false)
                        }} id={"content-buttons-menu"}>Все</Link>
                    </Box>
                    <Box sx={{ position: "relative" }}>
                        <Link onClick={
                            () => {
                                setScheduleClick(false);
                                setFilter('soon');
                            }
                        } id={"content-buttons-menu"}>Скоро</Link>
                    </Box>
                    <Box sx={{ position: "relative" }}>
                        <Link onClick={() => setScheduleClick(true)} id={"content-buttons-menu"}>Рассписание</Link>
                    </Box>
                </Box>

                {schedule ? (
                    <Schedule setSelect3={setSelect3} setSelect4={setSelect4} select3={select3} select4={select4} cinemas={cinemas} languages={languages} />
                ) : (
                    <>
                        <SelectBox setSelect1={setSelect1} setSelect2={setSelect2} select1={select1} select2={select2} cinemas={cinemas} languages={languages} />
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box id={"products-box"} sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4, mt: 3 }}>
                                {filterProducts.map((product, index) => (
                                    <Products key={index} product={product} />
                                ))}
                            </Box>
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    )
}

export default Content
