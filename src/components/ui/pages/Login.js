// import React from 'react'
// import { Link } from 'react-router-dom'
// import สมัครสมาชิก from './SignUp'

// export default function เข้าสู่ระบบ(){
//     return (
//         <>
//         <Link to="/สมัครสมาชิก">สมัครสมาชิก</Link>
//         <h2 fontSize ="50px">เข้าสู่ระบบ</h2>
//         </>
//     )
// }
  
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "../../../assets/logo.png";
import google from "../../../assets/google.png";
import { makeStyles } from '@material-ui/styles';
import theme from '../Theme';
import Container from '@mui/material/Container';
const useStyles = makeStyles(theme =>( {
    logo:{
        height: "6em",
      [theme.breakpoints.down("md")]:{
        height:"5em"
      },
      [theme.breakpoints.down('xs')]:{
        height:"4em"
      }
    },
    google:{
        height:"3em",
        [theme.breakpoints.down("md")]:{
            height:"2em"
          },
          [theme.breakpoints.down('xs')]:{
            height:"1em"
          }
    }
    
 
}))
// line
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            width: "200px"
        }}
    />
);

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Pet Adoption
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignInSide() {
    const classes = useStyles();
    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme} >
                     
                <Box item xs>
                    <img alt="logo" className ={classes.logo} src = {logo}  component={Link} to='/หน้าหลัก' /> 
                </Box>
        <Box container > 
                <Box item sx={{display:"flex" ,justifyContent: 'flex-end'}}>
                  <Typography  sx={{fontSize:"2rem" ,fontWeight: 'light'}}>ยังไม่เป็นสมาชิก?</Typography>
                  <Link href="/สมัครสมาชิก" sx={{mt: 2, mb: 2}}> {"สมัครสมาชิก"}</Link>
                </Box>
         </Box>

      <Grid container component="main" sx={{ height: '85vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 10,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems:'center'
            }}
          >
            {/* icon */}
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography  align= 'center' variant="h3" fontWeight="500">
              เข้าสู่ระบบ
            </Typography>
           
            <Box width="100%"/>
            <ColoredLine color="primary" />
            {/* <Grid align="center">  */}
            <Box align="center" component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    width="flex"
                    id="email"
                    label="ยูเซอร์เนม/อีเมล"
                    name="email"
                    autoComplete="email"
                    autoFocus
              />
            <Box width="100%"/>
                <TextField 
                    margin="normal"
                    required
                    width="flex"
                    name="password"
                    label="รหัสผ่าน"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
        
      
              <Box sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                 }}>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="จดจำฉันไว้"
                        
                    />
                    
                    <Typography >
                        <Link href="/ลืมรหัสผ่าน">ลืมรหัสผ่าน?</Link>
                    </Typography>
              </Box>
              <Box width="100%"/>
              <Button
                type="submit"
                
                variant="contained"
                style={{ mt: 3, mb: 2,padding: "20px 80px",maxWidth: '100px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}
                
                width="1em"
                height="1em"
              >
                ล็อกอิน
              </Button>
           
            </Box>
        </Box>
            <Box width='100%'/>
                <Typography align="center" variant="h6" fontWeight="light">
                 หรือ
                </Typography>

                
                <ColoredLine color="primary" />
                <Box width="100%"/>
             <Grid sx={{ display: 'flex' }} >
                
                <Button
                
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2,margin:"20px" }}
                   
                >
                    <img alt="google" className ={classes.google} src = {google}/>
                    
                    เข้าสู่ระบบด้วยบัญชีของ google
                </Button>

                </Grid>
            <Box width="100%"/>
            
              {/* <Copyright sx={{ mt: 5 }} /> */}
           
          
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}