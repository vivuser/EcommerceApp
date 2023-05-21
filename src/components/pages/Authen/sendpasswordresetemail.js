import {Grid, TextField, Button, Box, Alert} from "@mui/material";
import { useState } from "react";
// import { NavLink, useNavigate } from 'react-router-dom';

const SendPasswordResetEmail = () => {

        const [error, setError] = useState({
            status : false,
            msg: "",
            type: ""
        })
        // const navigate = useNavigate();
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const actualData = {
                email: data.get('email'),
            }
            if (actualData.email){
                console.log(actualData)
                document.getElementById('password-reset-email').reset()
                setError({ status: true, msg: "Password Reset Email Sent. Check your Email !!", type:'success'})
                // navigate('/')
            }else{
                setError({status:'true', msg:'Please provide valid email' , type:"error"})
            }
        }
      return (
        <>
            <Grid container justifyContent='center' mt='100px'>
                <Grid item sm={6} xs={12}>
                <Box component='form' noValidate sx={{mt:1}} id="password-reset-email"  onSubmit={handleSubmit}>
    <TextField required fullWidth id="email" name="email" label="Email Address" />  
    <Box textAlign="center">
        <Button type="submit" variant="contained" sx={{mt:3, mb:2, px:5}}> Send</Button>
    </Box>  
    {error.status ? <Alert severity={error.type} >{error.msg}</Alert> : ''}
    </Box>
                </Grid>
            </Grid>
        </>
      )
    }
export default SendPasswordResetEmail;
