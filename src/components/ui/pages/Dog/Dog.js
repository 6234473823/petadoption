import React,{useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
// import {CardHeader,CardMedia,CardContent,
//         CardActions,Collapse,Avatar,IconButton,Typography} from '@mui/material';
import {Collapse,Avatar,IconButton,Typography} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {ShareIcon,ExpandMoreIcon,MoreVertIcon} from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import {Stack} from '@mui/system';

import Card from './Card';
import {dogData} from './data';
import DogList from './DogList';
import "./styles.css";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  },
  //notworking may be chaged to makestyle soon
  menuItem:{
    fontFamily:'Prompt',
    fontSize:"15px"
  }
});

  
  
export default function Dog() {
  //theme
  const classes = useStyles();

  // filter working without sort
  // const [sort, setSort] = React.useState('');
  // const handleChangeSort = (event) => {
  //   setSort(event.target.value);
  // };
  //filter test
  const [sort, setSort] = React.useState('');
  const [filterSort, setFilterSort] = React.useState(true);
   const [filterDataSort,setFilterDataSort] = useState(dogData)
   
   const handleChangeSort = (event) => {
    setSort(!filterSort);
  };
 
  useEffect(()=>{
   setFilterDataSort(sort==='' ? sort:dogData.id.filterSort(dt=>dt.id ===sort))
  },[dogData.id])


  //age
  const [age, setAge] = React.useState('');
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  //species
  const [species, setSpecies] = React.useState('');
  const handleChangeSpecies = (event) => {
    setSpecies(event.target.value);
  };
 
  //sex
  const [sex, setSex] = React.useState('');
  const handleChangeSex = (event) => {
    setSex(event.target.value);
  };
  //compatible
  const [compatible, setCompatible] = React.useState('');
  const handleChangeCompatible = (event) => {
    setCompatible(event.target.value);
  };


  return (
    <>
    <Grid   
        container
        direction="row"
        >
        <Grid   container
        direction="column"
        justifyContent="center"
        alignItems="center"
        width="35%"
        background="black">
            <Grid item>
                  <Typography sx={{fontFamily:"Prompt",fontSize:"25px"}} >ค้นหาด้วยการกรอง</Typography>
            </Grid>
             {/* <Grid item >
                <Button sx={{fontFamily:"Prompt",fontSize:"25px"}}>
                    สายพันธุ์
                </Button >
             </Grid>
             <Grid item>
                <Button sx={{fontFamily:"Prompt",fontSize:"25px"}}>
                    อายุ
                </Button>
             </Grid>
             <Grid item >
                <Button sx={{fontFamily:"Prompt",fontSize:"25px"}}>
                    เพศ
                </Button>
             </Grid> 
             <Grid item >
                <Button sx={{fontFamily:"Prompt",fontSize:"25px"}}>
                    สามารถเข้าได้กับ
                </Button>
             </Grid> */}

             <Grid >
              
              {/* อาจต้องแก้ เพราะมีหลายสายพนัธุ์ เอาแบบอื่นมาใช้? */}
              <Grid item>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label"  sx={{fontFamily:"Prompt",fontSize:"18px"}}>สายพันธุ์</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={species}
                    label="Species"
                    onChange={handleChangeSpecies}
                   
                  >
                    <MenuItem sx={{fontFamily:"Prompt",fontSize:"18px"}} value=""><em>None</em> </MenuItem>
                    <MenuItem  sx={{fontFamily:"Prompt",fontSize:"18px"}} value={1}>Ten</MenuItem>
                    <MenuItem  sx={{fontFamily:"Prompt",fontSize:"18px"}} value={2}>Twenty</MenuItem>
                    <MenuItem  sx={{fontFamily:"Prompt",fontSize:"18px"}}value={3}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                </Grid>
                {/* อายุ */}
                <Grid item>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label" sx={{fontFamily:"Prompt",fontSize:"18px"}}>อายุ</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="age"
                    onChange={handleChangeAge}
                  >
                    <MenuItem  sx={{fontFamily:"Prompt",fontSize:"18px"}} value=""><em>None</em> </MenuItem>
                    <MenuItem  sx={{fontFamily:"Prompt",fontSize:"18px"}} value={10}>ลููกสุนัข</MenuItem>
                    <MenuItem  sx={{fontFamily:"Prompt",fontSize:"18px"}} value={20}>วัยรุ่น</MenuItem>
                    <MenuItem  sx={{fontFamily:"Prompt",fontSize:"18px"}} value={30}>ผู้ใหญ่</MenuItem>
                    <MenuItem  sx={{fontFamily:"Prompt",fontSize:"18px"}} value={30}>แก่</MenuItem>
                  </Select>
                </FormControl>
                </Grid>
                {/* เพศ */}
                <Grid item>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label" sx={{fontFamily:"Prompt",fontSize:"18px"}} >เพศ</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={sex}
                      label="Sex"
                      onChange={handleChangeSex}
                    >
                      <MenuItem sx={{fontFamily:"Prompt",fontSize:"18px"}}  value=""><em>None</em> </MenuItem>
                      <MenuItem sx={{fontFamily:"Prompt",fontSize:"18px"}} value={10}>เมีย</MenuItem>
                      <MenuItem sx={{fontFamily:"Prompt",fontSize:"18px"}} value={20}>ผู้</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                {/* สามารถเข้าได้กับ */}
                <Grid item>
                  <FormControl sx={{  m: 1, minWidth: 180 }}>
                    <InputLabel id="demo-simple-select-helper-label" sx={{fontFamily:"Prompt",fontSize:"18px"}}>สามารถเข้าได้กับ</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={compatible}
                      label="compatible"
                      onChange={handleChangeCompatible}
                    >
                      <MenuItem  sx={{fontFamily:"Prompt",fontSize:"18px"}} value=""><em>None</em> </MenuItem>
                      <MenuItem  sx={{fontFamily:"Prompt",fontSize:"18px"}} value={10}>เด็ก</MenuItem>
                      <MenuItem  sx={{fontFamily:"Prompt",fontSize:"18px"}} value={20}>แมว</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
             </Grid>
        </Grid>
    <Grid >
        <Stack spacing={4} flex="1 1 0">
            <Grid sx={{textAlign:'center'}}>
                    <Typography sx={{fontFamily:'Prompt',fontSize:"50px"}}>สุนัข</Typography>
                </Grid>
            <Grid  sx={{textAlign:'right'}}>
                    <Typography sx={{fontFamily:'Prompt',fontSize:"30px"}}>เรียงตาม</Typography>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        {/* <InputLabel id="demo-simple-select-standard-label">เรียงตาม</InputLabel> */}
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={sort}
                          onChange={handleChangeSort}
                          label="เรียงตาม"
                          sx={{fontFamily:'Prompt',fontSize:"15px"}}
                        >
                          <MenuItem sx={{fontFamily:'Prompt',fontSize:"15px"}} value=""> <em>None</em></MenuItem>
                          <MenuItem sx={{fontFamily:'Prompt',fontSize:"15px"}} value={1}>ใหม่ไปเก่า</MenuItem>
                          <MenuItem sx={{fontFamily:'Prompt',fontSize:"15px"}} value={2}>เก่าไปใหม่</MenuItem>
                          <MenuItem sx={{fontFamily:'Prompt',fontSize:"15px"}} value={3}>สุ่ม</MenuItem>
                        </Select>
                      </FormControl>
                     
            </Grid>
        {/* grid card */}
        <Grid  container
                className={classes.gridContainer}           
                justify="flex-start"
                alignItems="flex-start" 
                spacing={4}
                width="100%"
                sx={{background:"#FDFDBD"}}>
        {/* card data */}
            {/* <Grid item xs={6} sm={4} md={3} >
            <Card>
            <CardHeader
                action={
                <IconButton aria-label="add to favorites" >
                    <FavoriteIcon sx={{fontSize:"35px"}}></FavoriteIcon>
                </IconButton>
                }
            />
            <CardMedia
                component="img"
                height="120"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            />
            <CardContent sx={{textAlign:'center'}}>
                <Typography variant="body2" color="text.secondary">
                    Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    age
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    species
                </Typography>
            </CardContent>
            </Card>
            </Grid> */}
            <Grid item xs={6} sm={4} md={3} >

            {/* <CardHeader
                action={
                <IconButton aria-label="add to favorites" >
                    <FavoriteIcon sx={{fontSize:"35px"}}></FavoriteIcon>
                </IconButton>
                }
            /> */}
             {/* <EventsList data={eventsData} /> */}
             <DogList data={dogData}/>
            </Grid>
         </Grid>
        </Stack>
        </Grid> 
    </Grid>
    </>
  );
}