import { Typography,Grid,TextField,makeStyles,Box } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons';
import React from 'react'
import button from "../../button/button.css";

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
    height:'150px',
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
const UserSetting = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Grid className={classes.container}>
        <Grid item>
        <Typography className={classes.header}>อีเมล</Typography>
        <Typography>xxx@gmail.com</Typography>
        <TextField
          margin="normal"
          required
          width="flex"
          id="new-email"
          label="อีเมลใหม่"
          name="new-email"
          autoComplete="อีเมลใหม่"
          autoFocus
          className={classes.borderText}
      />
        <button class="button-primary">เปลี่ยน</button>
        </Grid>
      </Grid>
      <Grid>
        <Box width="100%"/>
      </Grid>
      
      <Grid item className={classes.container}>
        <Grid>
      <Typography className={classes.header}>เปลี่ยนรหัสผ่าน</Typography>
      <TextField
          margin="normal"
          required
          width="flex"
          id="new-password"
          label="รหัสผ่านใหม่"
          name="new-password"
          autoComplete="รหัสผ่านใหม่"
          autoFocus
          className={classes.borderText}
      />
       <TextField
          margin="normal"
          required
          width="flex"
          id="confirm-newpass"
          label="ยืนยันรหัสผ่านใหม่"
          name="confirm-newpass"
          autoComplete="ยืนยันรหัสผ่านใหม่"
          autoFocus
          className={classes.borderText}
      />
      <button class="button-primary">อัพเดตรหัสผ่านใหม่</button>

      </Grid>
      </Grid>

    </Grid>
  )
}

export default UserSetting