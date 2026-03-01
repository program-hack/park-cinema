import React, { useState } from 'react'
import { Box, Fade, List, ListItem, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


/* Icons */
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import EventIcon from '@mui/icons-material/Event';
import Popup from './Popup';


const SelectBox = ({ setSelect1, setSelect2, select1, select2, cinemas, languages }) => {
    const [calendar, setCalendar] = useState(false);
    const [state1, setState1] = useState('');
    const [state2, setState2] = useState('');
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, position: "relative", py: 5 }}>
                <Box onClick={() => setSelect1(!select1)} id={"select"}>
                    <Typography sx={{ fontSize: "17px", color: "#fff", fontStyle: "italic", width: "370px", display: "flex", justifyContent: "center" }}>{state1 ? state1 : "Язык"}</Typography>
                    {select1 ? <ArrowDropUpIcon sx={{ color: "#fff" }} /> : <ArrowDropDownIcon sx={{ color: "#fff" }} />}
                </Box>

                <Box onClick={() => setSelect2(!select2)} id={"select"}>
                    <Typography sx={{ fontSize: "17px", color: "#fff", fontStyle: "italic", width: "370px", display: "flex", justifyContent: "center" }}>{state2 ? state2 : "Кинотеатры"}</Typography>
                    {select2 ? <ArrowDropUpIcon sx={{ color: "#fff" }} /> : <ArrowDropDownIcon sx={{ color: "#fff" }} />}
                </Box>

                <Box onClick={() => setCalendar(true)} id={"input"} cursor="pointer">
                    {calendar ?
                        <Fade in={calendar}>
                            <Box id={"input"}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker
                                            slotProps={{
                                                textField: {
                                                    fullWidth: true,
                                                    sx: {
                                                        width: "500px",
                                                        '& fieldset': { border: 'none' },
                                                        '& .MuiOutlinedInput-root': {
                                                            outline: 'none',
                                                            '&.Mui-focused fieldset': {
                                                                border: 'none',
                                                            },
                                                        },
                                                        '& input:focus': {
                                                            outline: 'none !important',
                                                        },
                                                        '& fieldset': {
                                                            border: 'none !important'
                                                        },
                                                        '& .MuiInputBase-input': {
                                                            color: 'white !important',
                                                            WebkitTextFillColor: 'white !important',
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            color: 'white !important',
                                                        },
                                                        '& .MuiInputLabel-root.Mui-focused': {
                                                            color: 'white !important',
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            color: 'white !important',
                                                        },
                                                        '& .MuiOutlinedInput-root': {
                                                            '& fieldset': {
                                                                borderColor: 'rgba(255, 255, 255, 0.5) !important',
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: 'white !important',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: 'white !important',
                                                            },
                                                        },
                                                    },
                                                },
                                            }}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Box>
                        </Fade>
                        :
                        <Box onClick={() => setCalendar(true)} id={"input"}>
                            <Typography sx={{ color: "#fff", fontSize: "17px", fontWeight: 500, width: "370px", textAlign: "center" }}>Сегодня</Typography>
                            <EventIcon onClick={() => setCalendar(true)} sx={{ color: "#fff", mr: 1.3, mt: 1 }} />
                        </Box>
                    }
                </Box>
            </Box>

            <Popup
                languages={languages}
                cinemas={cinemas}
                select1={select1}
                select2={select2}
                setState1={setState1}
                setState2={setState2}
                state1={state1}
                state2={state2}
            />
        </>
    )
}

export default SelectBox
