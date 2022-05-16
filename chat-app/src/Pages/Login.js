import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Select from "@mui/material/Select";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../Assets/Css/login.css';
import {withRouter} from "react-router-dom";
import {useState} from "react";


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            please first login..
        </Typography>
    );
}

const theme = createTheme();

const Login = (props)=>{
    const [name,setName] = useState('');
    const [gender,setGender] = useState(0)
    const handleChange = () => {
    if (gender==0){
        setGender(1)
        alert('0=>'+gender)
    }else {
        setGender(0)
        alert('1=>'+gender)
    }

    }
    const handleSubmit = (event) => {

       console.log({
            name,
            gender
        })
        const data = new FormData(event.currentTarget);


            setName(data.get('fname'))

        console.log({
            data
        });
        props.history.push({
            pathname:'/chatroom',
            state:{
                name

            }
        })
    };

    return (

        <ThemeProvider theme={theme}>

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField

                            margin="normal"
                            required
                            fullWidth
                            id="fname"
                            label="firstname"
                            name="fname"
                            autoComplete="text"
                            autoFocus
                        />

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"

                                name="gender"
                                label="gender"
                                onChange={()=>handleChange()}
                            >
                                <MenuItem value={0}>male</MenuItem>
                                <MenuItem  value={1}>female</MenuItem>

                            </Select>
                        </FormControl>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}

                        >
                           log In
                        </Button>

                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}

export default withRouter(Login) ;

