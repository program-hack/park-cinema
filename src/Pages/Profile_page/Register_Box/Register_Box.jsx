import React from 'react'
import { Box, Button, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "../main.css";

/* Icons */
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Register_Box = () => {
    const [cleared, setCleared] = React.useState(false);

    React.useEffect(() => {
        if (cleared) {
            const timeout = setTimeout(() => {
                setCleared(false);
            }, 1500);

            return () => clearTimeout(timeout);
        }
        return () => { };
    }, [cleared]);
    return (
        <>
            <Typography sx={{ color: "#d9dadb", fontSize: "1.875rem" }}>Регистрация</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 10, alignItems: "start", mt: 3 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <Box sx={{ borderBottom: "1px solid #d9dadb", minWidth: "500px", width: "100%", height: "50px", pl: 1 }}>
                        <input id="input-styles" style={{ width: "100%", height: "100%", color: "#fff", border: "none", outline: "none", background: "none" }} type="name" placeholder="Имя" />
                    </Box>
                    <Box sx={{ borderBottom: "1px solid #d9dadb", minWidth: "500px", width: "100%", height: "50px", pl: 1 }}>
                        <input id="input-styles" style={{ width: "100%", height: "100%", color: "#fff", border: "none", outline: "none", background: "none" }} type="phone" placeholder="+994" />
                    </Box>

                    <Box sx={{ borderBottom: "1px solid #d9dadb", minWidth: "500px", width: "100%", height: "50px", pl: 1, pb: 1.3 }}>
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
                                                    color: '#fff !important',
                                                    WebkitTextFillColor: '#fff !important',
                                                },
                                                '& .MuiInputLabel-root': {
                                                    color: '#fff !important',
                                                },
                                                '& .MuiInputLabel-root.Mui-focused': {
                                                    color: '#fff !important',
                                                },
                                                '& .MuiSvgIcon-root': {
                                                    color: '#fff !important',
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

                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        sx={{ color: "#fff" }}
                    >
                        <FormControlLabel value="male" control={<Radio sx={{ color: "#fff" }} />} label="Мужской"></FormControlLabel>
                        <FormControlLabel value="female" control={<Radio sx={{ color: "#fff" }} />} label="Женский"></FormControlLabel>
                    </RadioGroup>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        <Box sx={{ borderBottom: "1px solid #d9dadb", minWidth: "500px", width: "100%", height: "50px", pl: 1 }}>
                            <input id="input-styles" style={{ width: "100%", height: "100%", color: "#fff", border: "none", outline: "none", background: "none" }} type="surname" placeholder="Фамилия" />
                        </Box>
                        <Box sx={{ borderBottom: "1px solid #d9dadb", minWidth: "500px", width: "100%", height: "50px", pl: 1 }}>
                            <input id="input-styles" style={{ width: "100%", height: "100%", color: "#fff", border: "none", outline: "none", background: "none" }} type="gmail" placeholder="Электронная почта" />
                        </Box>
                        <Box sx={{ borderBottom: "1px solid #d9dadb", minWidth: "500px", width: "100%", height: "50px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1, px: 1 }}>
                            <input id="input-styles" style={{ width: "100%", height: "100%", color: "#fff", border: "none", outline: "none", background: "none" }} type="password" placeholder="Пароль" />
                            <RemoveRedEyeIcon sx={{ color: "#fff" }} />
                        </Box>
                        <Box sx={{ borderBottom: "1px solid #d9dadb", minWidth: "500px", width: "100%", height: "50px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1, px: 1 }}>
                            <input id="input-styles" style={{ width: "100%", height: "100%", color: "#fff", border: "none", outline: "none", background: "none" }} type="password" placeholder="Подтвердить пароль" />
                            <RemoveRedEyeIcon sx={{ color: "#fff" }} />
                        </Box>
                    </Box>
                    <Button sx={{ backgroundColor: "rgba(213, 43, 30, 1)", color: "#fff", textTransform: "inherit", borderRadius: 50, width: "100%", height: "45px", transition: "all 0.3s ease", opacity: 0.7, mt: 5, "&:hover": { opacity: 1 } }}>Регистрация</Button>
                </Box>
            </Box>
        </>
    )
}

export default Register_Box
