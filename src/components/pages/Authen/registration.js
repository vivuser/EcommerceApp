
import {TextField, Button, Box, Alert, FormControl, FormControlLabel, Checkbox} from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const Registration = () => {

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
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            passwordconfirmation: data.get('confirmpassword'),
        }
        if (actualData.name && actualData.email && actualData.password && actualData.passwordconfirmation && actualData.tc !== null){
            if (actualData.password == actualData.passwordconfirmation){
                console.log(actualData)
                document.getElementById('registration-form').reset()
                setError({ status: true, msg: "Registration Successful", type:'success'})
                navigate('/dashboard')
            }
            else{
                setError({ status: true, msg: "password and confirm password does not match", type:'error'})
            }
        }else{
            setError({status:'true', msg:'All fiels are required' , type:"error"})
        }
    }
  return (
    <>
<Box component='form' noValidate sx={{ mt:1 }} id="registration-form"  onSubmit={handleSubmit}>
<TextField margin="normal" required fullWidth id="name" name="name" label="Name" /> 
<TextField margin="normal" required fullWidth id="email" name="email" label="Email Address" /> 
<TextField margin="normal" required fullWidth id="password" name="password" label="password" type="password" /> 
<TextField margin="normal" required fullWidth id="confirmpassword" name="confirmpassword" label="confirm password" type="confirmpassword" /> 
<FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />}
label="I agree to terms and condition." />
<Box textAlign="center">
    <Button type="submit" variant="contained" sx={{mt:3, mb:2, px:5}}> Join</Button>
</Box>
<NavLink  to="/"> Forgot Password ? </NavLink>   
{error.status ? <Alert severity={error.type} >{error.msg}</Alert> : ''}
</Box>
    </>
  )
}
export default Registration;
