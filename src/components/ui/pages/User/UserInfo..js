import React from 'react'
import { TextField,Box,Grid, Typography,FormControl,Select,MenuItem,InputLabel, Button,Input,FormHelperText,makeStyles } from '@material-ui/core'
import button from "../../button/button.css";
import { borderRadius } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 300,
    // maxWidth: 300,
    width:'350px'
  
    },
  container: {
    border: '1px solid purple',
    display: 'inline-flex',
    height:'250px',
    width:'800px',
    borderRadius: '11px'
  },
  borderText:{
    border:'1px outset purple',
    borderRadius:'11px'
  },

  header:{
    fontSize:"25px"
  },

}));


const UserInfo = () => {
  const classes = useStyles();
  const [province, setProvince] = React.useState('');
  const [openProvince, setOpenProvince] = React.useState(false);

  const handleChangeProvince = (event) => {
    setProvince(event.target.value);
  };

  const handleCloseProvince = () => {
    setOpenProvince(false);
  };

  const handleOpenProvince = () => {
    setOpenProvince(true);
  };

  return (
    // <div>ข้อมูลส่วนตัวของฉัน</div>
    <Grid>
      <Grid className={classes.container} >
      <Box>
        <Typography className ={classes.header}>ข้อมูลส่วนตัว</Typography>
          <Box align-items= 'center'>
            <TextField
            margin="normal"
            required
            width="flex"
            id="username"
            label="ชื่อ"
            name="name"
            autoComplete="ชื่อ"
            autoFocus
            className={classes.borderText}
            />
            <TextField
            margin="normal"
            required
            width="flex"
            id=""
            label="นามสกุล"
            name="surname"
            autoComplete="นามสกุล"
            autoFocus
            className={classes.borderText}
            />
            <Box width="100%"/>
            <TextField
            margin="normal"
            required
            width="flex"
            id=""
            label="เบอร์โทร"
            name="telephone"
            autoComplete="เบอร์โทร"
            autoFocus
            className={classes.borderText}
            />
          </Box>
          </Box>
      </Grid>
   
      
      <Grid item className={classes.container}>
      <Box>
      <Typography className ={classes.header}>ที่อยู่</Typography>
      <Grid item>
      <TextField
          margin="normal"
          required
          width="flex"
          id="email"
          label="หมู่บ้านหรือเลขที่บ้าน"
          name="house no."
          autoComplete="หมู่บ้านหรือเลขที่บ้าน"
          autoFocus
          className={classes.borderText}
      />
       <TextField
          margin="normal"
          required
          width="flex"
          id="email"
          label="หมู่"
          name="moo."
          autoComplete="หมู่"
          autoFocus
          className={classes.borderText}
      />
      </Grid>
      <Grid item>
      <TextField
          margin="normal"
          required
          width="flex"
          id="email"
          label="เขต/ตำบล"
          name="district"
          autoComplete="เขต/ตำบล"
          autoFocus
          className={classes.borderText}
      />
     <TextField
          margin="normal"
          required
          width="flex"
          id="road"
          label="ถนน"
          name="road"
          autoComplete="ถนน"
          autoFocus
          className={classes.borderText}
      />
      </Grid>
      <Grid item>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label" >จังหวัด</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openProvince}
          onClose={handleCloseProvince}
          onOpen={handleOpenProvince}
          value={province}
          label="จังหวัด"
          onChange={handleChangeProvince}
          className={classes.borderText}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <TextField 
				type='text' 
				defaultValue='ประเทศไทย'
				variant='outlined'
				inputProps={
					{ readOnly: true, }
				}
        disabled
        
			/>

      <button class="button-primary" >บันทึก</button>
      </Grid>
      <Box width="100%"/>
      </Box>
      </Grid>
    </Grid>
  )
}

export default UserInfo