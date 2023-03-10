import * as React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {makeStyles} from "@material-ui/core/";
import { CallMissedSharp } from '@material-ui/icons';

import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import Grid from '@material-ui/core/Grid';
import Box from '@mui/material';
import { Icon } from '@iconify/react';
import SearchBar from "material-ui-search-bar";

import Autocomplete from '@mui/material/Autocomplete';
import { ThemeProvider } from '@material-ui/styles';
import theme from "./Theme";
import { useTheme } from "@material-ui/core/styles";

import SearchIcon from "@mui/icons-material/Search";
import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";

import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Header2 from './Header';
import HeaderUser from './HeaderUser';



const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const useStyles = makeStyles(theme => ({
  article:{
    fontFamily: "Prompt",
    fontSize: "35px"
  },
  subDes1 :{
    fontFamily: "Prompt",
    fontSize: "25px",
  },
  subDes2 :{
    fontFamily: "Prompt",
    fontSize: "20px",
    opacity:"0.5"
  }
}))



export default function หน้าหลัก() {
  const classes = useStyles();
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };
  const flatProps = {
    options: top100Films.map((option) => option.title),
  };
  const [value, setValue] = React.useState(null);

  

  const StyledTextField = styled(TextField)({
    "& label": {
      left: "unset",
      right: "1.75rem",
      transformOrigin: "right",
      fontSize: "1rem",
    },
    "& legend": {
      textAlign: "right",
      fontSize: "0.8rem",
    },
  });

  const content = [
    {
      title: "Vulputate Mollis Ultricies Fermentum Parturient",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Read More",
      image: "https://i.imgur.com/ZXBtVw7.jpg",
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png"
    },
    {
      title: "Tortor Dapibus Commodo Aenean Quam",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Discover",
      image: "https://i.imgur.com/DCdBXcq.jpg",
      user: "Erich Behrens",
      userProfile: "https://i.imgur.com/0Clfnu7.png"
    },
    {
      title: "Phasellus volutpat metus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
      button: "Buy now",
      image: "https://i.imgur.com/DvmN8Hx.jpg",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png"
    }
  ];

  return (
    <ThemeProvider theme ={theme}>
    <React.Fragment>
      
      <Grid container spacing={1} justifyContent="center" >
          <Grid item xs={12} md ={4} lg={6} style={{backgroundColor: 'white',height: '100px',textAlign: "center"}}>
          </Grid>
      </Grid>
      <Grid container spacing={1} justifyContent="center" >
          <Grid item xs={12} md ={4} lg={6} style={{backgroundColor: 'white',height: '100%',textAlign: "center"}}>
            <Typography sx={{fontSize:"60px",fontFamily:"Prompt",textAlign:"left"}}>ค้นหาเพื่อนร่วมบ้าน... </Typography>  
          </Grid>
        </Grid>
        <Grid container spacing={1} justifyContent="center" >
          <Grid item xs={12} md ={4} lg={8} style={{backgroundColor: 'white',height: '100%',textAlign: "center"}}>
            <Typography sx={{fontSize:"75px",fontFamily:"Prompt",textAlign:"right"}}>สัตว์เลี้ยงตัวใหม่ </Typography>  
          </Grid>
        </Grid>
        
        <Grid container spacing={3} justifyContent="center" background='linear-gradient(to bottom, white 0%,white 50%,purple 50%,purple 100%)' >
        <Grid item xs={12} md ={6} lg={5}>
            <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <StyledTextField
                {...params}
                label="(สุนัข/แมว/สายพันธุ์/สถานสงเคราะห์)"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{fontSize:"50px"}}/>
                    </InputAdornment>
                  )
                }}
              />
            )}
          />
          </Grid>
        </Grid>


        <Grid container spacing={1} justifyContent="space-between" >
          <Grid item xs={12} md ={4} lg={6} style={{backgroundColor: 'white',height: '100px',textAlign: "center"}}>
          </Grid>
      </Grid>
      <Grid container justifyContent="center" style={{background: 'linear-gradient(to bottom,#d6c1e6 50%,#d6c1e6 50%,#d6c1e6 50%,white 100%)', height: '110%',textAlign: "center"}}>
        <Grid item xs={7} md ={3} lg={2} >
          <Link to="./สุนัข">
            <Card sx={{ maxWidth:250}}  >
              <Icon icon="noto:dog-face" color="purple" font-size= "150px"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  สุนัข
                </Typography>
              </CardContent>
            </Card>
        </Link>
        </Grid>
        <Grid item xs={7} md ={3} lg={2} style={{textAlign: "center"}} >
        <Link to="./แมว">
        <Card sx={{ maxWidth:250}}>
          <CardContent>
          <Icon icon="openmoji:cat-face" color="gray" font-size= "150px"/>
            <Typography gutterBottom variant="h5" component="div">
              แมว
            </Typography>
          </CardContent>
        </Card>
        </Link>
        </Grid>
        <Grid item xs={7} md ={3} lg={2} style={{textAlign: "center"}}>
        <Link to="./สถานสงเคราะห์">
        <Card sx={{  maxWidth:250 }}>
          <CardContent>
          <Icon icon="material-symbols:location-city-rounded" color="gray"  font-size= "150px"/>
            <Typography gutterBottom variant="h5" component="div">
              สถานสงเคราะห์
            </Typography>
          </CardContent>
        </Card>
        </Link>
        </Grid>
     </Grid>

     <Grid container spacing={1} justifyContent="center" >
          <Grid item xs={12} md ={4} lg={6} style={{backgroundColor: 'white',height: '100px',textAlign: "center"}}>
          </Grid>
      </Grid>

    <Grid container spacing={3} justifyContent="center" >
        <Grid item xs={12} md ={12} lg={12} style={{backgroundColor: 'white', height: '100%',textAlign: "center"}}>
           
            <Carousel
            animation ="slide"
            duration = "300"
            NextIcon={<ArrowForwardIosIcon/>}
            PrevIcon={<ArrowBackIosNewIcon/>}
            >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
          </Carousel>
          </Grid>
        </Grid>
    </React.Fragment>
    </ThemeProvider>
  );

}


//for searchbar
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

//carousel
function Item(props){
  const classes = useStyles();
    return (
        <Paper >
            
            <h2 className={classes.article}>{props.item.name}</h2>
            <p  className={classes.subDes1}>{props.item.description1}</p>
            <p  className={classes.subDes2}>{props.item.description2}</p>
            <Button className="CheckButton">
                อ่านเพิ่ม
            </Button>
        </Paper>
    )
}

var items = [
  {
      name: "บทความแนะนำจากผู้เชี่ยวชาญ",
      description1: "ขั้นตอนการรับเลี้ยงสัตว์",
      description2: "ช่ยให้การรับเลี้ยงสัตซ์จากสถานสงเคราะห์เป็นไปอย่างราบรื่น",
  },
  {
      name: "Random Name #2",
      description1: "Hello World!",
      description2: "ช่ยให้การรับเลี้ยงสัตซ์จากสถานสงเคราะห์เป็นไปอย่างราบรื่น",
  }
]