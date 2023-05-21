import {TextField,Grid, Button, Box, Alert} from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Changepassword = () => {

    const [error, setError] = useState({
        status : false,
        msg: "",
        type: ""
    })
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            password: data.get('password'),
            confirmpassword: data.get('confirmpassword'),
        }
        if (actualData.password && actualData.confirmpassword){
            console.log(actualData)
            if(actualData.password === actualData.confirmpassword){
            document.getElementById('password-reset-form').reset()
            setError({ status: true, msg: "Password Reset Successfully. Redirecting to login page...", type:'success'})
           setTimeout(() => {
            navigate("/login")
           }, 3000)
        }  else {
            setError({ status: true, msg: "Password doesn't match. Please check carefully", type:'error'})
           } 
        }   else { 
            setError({ status: true, msg: "All fields are required", type:'error'})
        }
    }
  return (
    <>
        <Grid container justifyContent='center' mt='100px'>
            <Grid item sm={6} xs={12}>
            <h1>ResetPassword</h1>
            <Box component='form' noValidate sx={{mt:1}} id="password-reset-form"  onSubmit={handleSubmit}>
<TextField required fullWidth id="password" name="password" label="password" />  
<TextField required fullWidth id="confirmpassword" name="confirmpassword" label="confirmpassword" />  
<Box textAlign="center">
    <Button type="submit" variant="contained" sx={{mt:3, mb:2, px:5}}> Save</Button>
</Box>  
{error.status ? <Alert severity={error.type} >{error.msg}</Alert> : ''}
</Box>
            </Grid>
        </Grid>
    </>
  )
}
  

export default Changepassword
