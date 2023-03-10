import { Typography,Grid,makeStyles,MenuItem,FormControl,Select,Box } from '@material-ui/core'
import {dogData} from './Dog/data';
import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({

  container: {
    border: '1px solid purple',
    display: 'inline-flex',
    height:'300px',
    width:'800px',
    borderRadius: '11px'
  },
  h1:{
    fontSize:"40px",
    textAlign:"center"
  },
  h2:{
    fontSize:"25px",
    textAlign:"right"
  },

  header:{
    fontSize:"25px"
  },


}));

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};
 
const Favorite = () => {
  const classes = useStyles();
  const [sort, setSort] = React.useState('');
  const [filterSort, setFilterSort] = React.useState(true);
   const [filterDataSort,setFilterDataSort] = useState(dogData)

  const handleChangeSort = (event) => {
    setSort(!filterSort);
  };
 
  useEffect(()=>{
   setFilterDataSort(sort==='' ? sort:dogData.id.filterSort(dt=>dt.id ===sort))
  },[dogData.id])
  return (
    <>
  <Grid>
      <Typography className={classes.h1}>รายการสัตว์ที่ชื่นชอบ</Typography>
    </Grid>

     <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Item sx={{width:200, textAlign:'center'}}>
          
          <Typography  sx={{width:200, textAlign:'center'}}>เรียงตาม</Typography>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        {/* <InputLabel id="demo-simple-select-standard-label">เรียงตาม</InputLabel> */}
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={sort}
                          onChange={handleChangeSort}
                          label="เรียงตาม"
                          sx={{fontFamily:'Prompt',fontSize:"30px"}}
                        >
                          <MenuItem sx={{fontFamily:'Prompt',fontSize:"15px"}} value=""> <em>None</em></MenuItem>
                          <MenuItem sx={{fontFamily:'Prompt',fontSize:"15px"}} value={1}>ใหม่ไปเก่า</MenuItem>
                          <MenuItem sx={{fontFamily:'Prompt',fontSize:"15px"}} value={2}>เก่าไปใหม่</MenuItem>
                          <MenuItem sx={{fontFamily:'Prompt',fontSize:"15px"}} value={3}>สุ่ม</MenuItem>
                        </Select>
                      </FormControl>  
        </Item>
        <Item sx={{borderColor:'white'}}></Item>
        <Item sx={{borderColor:'white'}}></Item>
      </Box>

    <Grid className={classes.container}>

      <Typography  className={classes.header}>สุนัข</Typography>
    </Grid>
     <Grid className={classes.container}>

     <Typography  className={classes.header}>แมว</Typography>
   </Grid>

   </>
  )
}

export default Favorite