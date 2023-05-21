import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Changepassword from './Authen/Changepassword';

const Dashboard = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        console.log('Logout Clicked'); 
        navigate('/login')
    }

return <>
      <CssBaseline />
      <Grid container>
        <Grid item lg ={4} sx={{backgroundColor: 'gray', p:5, color:'white'}}> 
        <h1>Dashboard</h1>
            <Typography variant='h5'> Email: chamyal17@gmail.com</Typography>
            <Typography variant='h5'> Name: Vivek</Typography>
            <Button variant='contained' color='warning' size='large'
        onClick={handleLogout} sx={{ mt:8 }}>Logout</Button>
        </Grid>

        <Grid item sm={8}>
        <Changepassword/>
        </Grid>
      </Grid>    
    </>;

}
export default Dashboard;
