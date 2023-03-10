import React,{ useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HelpIcon from '@mui/icons-material/Help';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import styled from 'styled-components';
import logo from "../../assets/logo.png"
import { withStyles } from '@material-ui/core/styles';
import Sidebar from "./Sidebar";

import สมัครสมาชิก from "./pages/SignUp";
import เข้าสู่ระบบ from "./pages/Login";
//มีึปัญหาอย่างมาก
//icon import แบบmui5
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

import button from "./button/button.css";

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "1em",
      [theme.breakpoints.down("md")]:{
        height:"2em"
      },
      [theme.breakpoints.down('xs')]:{
        height:"1.5em"
      }
    },
    logo:{
      height: "6em",
      [theme.breakpoints.down("md")]:{
        height:"5em"
      },
      [theme.breakpoints.down('xs')]:{
        height:"4em"
      }

    },
    tabContainer:{
      marginRight: 'auto'
    },
    tab:{
      ...theme.typography.tab,
      minWidth: 0,
      marginLeft: "20px"
    },
    button:{
      ...theme.typography.estimate,
      borderRadius: "50px",
      marginRight: "30px",
      
    }, 
    menu: {
      backgroundColor: theme.palette.common.purple,
      color: "purple",
      borderRadius: "0px",
      zIndex: 1302
    },
    menuItem: {
      ...theme.typography.tab,
      opacity: 0.8,
      "&:hover": {
        opacity: 1
      }
    },
    drawer:{
      backgroundColor: theme.palette.common.purple
    },
    drawerItem:{
      ...theme.typography.tab,
      fontWeight: "0.2em",
      color: "white",
      opacity: 0.7
    },
    drawerItemestimate:{
      backgroundColor: theme.palette.commo
    },
    drawerItemSelected:{
      opacity: 1
    }
}))


const StyledMenu = withStyles({
  paper: {
    border: '0.1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Header(props){
  const classes = useStyles();

  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"))

  //drawer
  const [openDrawer,setOpenDrawer] = useState(false);
  //sub nav
  const [subNav,setSubNav] = useState(false);
  const showSubNav = ( )=> setSubNav(!subNav);



  const [value,setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu,setOpenMenu] = useState(false)
  const handleChange = (e,value) => {
    setValue(value);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const handleClose = e => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

// set tab ให้ตอนรีเฟรซหน้าในเมนูย่อย tab ทึบถูกตำแหน่ง
  useEffect( ()=> {
    if (window.location.pathname === "/หน้าหลัก" && value !==0){
      setValue(0);
    }else if (window.location.pathname === "/การรับเลี้ยงสัตว์" && value !==1){
      setValue(1);
    }else if (window.location.pathname === "/การดูแลสุนัข" && value !==2){
      setValue(2);
    }else if (window.location.pathname === "/การดูแลแมว" && value !==3){
      setValue(3);
    }else if (window.location.pathname === "/สถานสงเคราะห์" && value !==4){
      setValue(4);
    }else if (window.location.pathname === "/ช่วยเหลือ" && value !==5){
      setValue(5);
    }
  },[value]);

//////////////////////////////////////////////////////////////////
  //adoption
  const [anchorElAdoption, setAnchorElAdoption] = useState(null)
  const [openAdoption,setOpenMenuAdoption] = useState(false)
  const handleChangeAdoption = (e,newValue) => {
    setValue(newValue);
  };
  const handleClickAdoption = e => {
    setAnchorElAdoption(e.currentTarget);
    setOpenMenuAdoption(true);
  };
  const handleMenuItemClickAdoption = (e, i) => {
    setAnchorElAdoption(null);
    setOpenMenuAdoption (false);
    props.setSelectedIndex(i);
  };
  const handleCloseAdoption = e => {
    setAnchorElAdoption(null);
    setOpenMenuAdoption (false);
  };

/////dogcare
const [anchorElDogCare, setAnchorElDogCare] = useState(null)
const [openDogCare,setOpenMenuDogCare] = useState(false)

const handleChangeDogCare = (e,newValue) => {
  setValue(newValue);
};

const handleClickDogCare = e => {
  setAnchorElDogCare(e.currentTarget);
  setOpenMenuDogCare(true);
};

const handleMenuItemClickDogCare = (e, i) => {
  setAnchorElDogCare(null);
  setOpenMenuDogCare(false);
  props.setSelectedIndex(i);
};

const handleCloseDogCare = e => {
  setAnchorElDogCare(null);
  setOpenMenuDogCare(false);
};


  //catcare
  const [anchorElCatCare, setAnchorElCatCare] = useState(null)
  const [openCatCare,setOpenMenuCatCare] = useState(false)

  const handleChangeCatCare = (e,newValue) => {
    setValue(newValue);
  };

  const handleClickCatCare = e => {
    setAnchorElCatCare(e.currentTarget);
    setOpenMenuCatCare(true);
  };

  const handleMenuItemClickCatCare = (e, i) => {
    setAnchorElCatCare(null);
    setOpenMenuCatCare(false);
    props.setSelectedIndex(i);
  };

  const handleCloseCatCare = e => {
    setAnchorElCatCare(null);
    setOpenMenuCatCare(false);
  };


  //shelter
  const [anchorElShelter, setAnchorElShelter] = useState(null)
  const [openShelter,setOpenMenuShelter] = useState(false)

  const handleChangeShelter = (e,newValue) => {
    setValue(newValue);
  };

  const handleClickShelter = e => {
    setAnchorElShelter(e.currentTarget);
    setOpenMenuShelter(true);
  };

  const handleMenuItemClickShelter = (e, i) => {
    setAnchorElShelter(null);
    setOpenMenuShelter(false);
    props.setSelectedIndex(i);
  };

  const handleCloseShelter = e => {
    setAnchorElShelter(null);
    setOpenMenuShelter(false);
  };


  //help

  const [anchorElHelp, setAnchorElHelp] = useState(null)
  const [openHelp,setOpenMenuHelp] = useState(false)

  const handleChangeHelp = (e,newValue) => {
    setValue(newValue);
  };

  const handleClickHelp = e => {
    setAnchorElHelp(e.currentTarget);
    setOpenMenuHelp(true);
  };

  const handleMenuItemClickHelp = (e, i) => {
    setAnchorElHelp(null);
    setOpenMenuHelp(false);
    props.setSelectedIndex(i);
  };

  const handleCloseHelp = e => {
    setAnchorElHelp(null);
    setOpenMenuHelp(false);
  };


  //user

 




  //create responsive web
  const tabs = (
    <React.Fragment>
        {/* ทุก tab */}
        <Tabs 
        value={value} 
        
        className ={classes.tabContainer}
        indicatorColor ="primary">
 {/* each tab */}
      <Tab 
        arais-owns = {anchorEl ? "menu-main" : undefined} 
        aria-haspopup ={anchorEl ? "true" : undefined}
        className ={classes.tab} 
        component = {Link} 
        onClick = {event => setValue(0)}
        label="หน้าหลัก"  
        to= "/หน้าหลัก" >
          <img alt="logo" className ={classes.logo} src = {logo} />
        </Tab>
      <Tab 
        arais-owns = {anchorEl ? "menu-adoption" : undefined} 
        aria-haspopup ={anchorEl ? "true" : undefined}
        className ={classes.tab} 
        // component = {Link} 
        onClick = { event => handleClickAdoption(event)}
        label="การรับเลี้ยงสัตว์" 
        to= "/การรับเลี้ยงสัตว์" 
        // to= "/หน้าหลัก"
        /> 

        <Tab 
        arais-owns = {anchorEl ? "menu-dogcare" : undefined} 
        aria-haspopup ={anchorEl ? "true" : undefined}
        className ={classes.tab} 
        onClick = { event => handleClickDogCare(event) && setValue(2) }
        // component = {Link} 
        label="การดูแลสุนัข" 
        // to= "/การดูแลสุนัข"

       /> 
      
        <Tab 
        arais-owns = {anchorEl ? "menu-catcare" : undefined} 
        aria-haspopup ={anchorEl ? "true" : undefined}
        className ={classes.tab} 
        // component = {Link} 
        onClick = { event => handleClickCatCare(event) }
        label="การดูแลแมว" 
        // to= "/การดูแลแมว"
         /> 
  
        <Tab 
        arais-owns = {anchorEl ? "menu-shelter" : undefined} 
        aria-haspopup ={anchorEl ? "true" : undefined}
        className ={classes.tab} 
        onClick = { event => handleClickShelter(event) }
        // component = {Link} 
        label="สถานสงเคราะห์" 
        // to= "/สถานสงเคราะห์"
        /> 

      <Tab 
        arais-owns = {anchorEl ? "menu-help" : undefined} 
        aria-haspopup ={anchorEl ? "true" : undefined}
        className ={classes.tab} 
        onClick = { event => handleClickHelp(event)}
        // component = {Link} 
        label="ช่วยเหลือ" 
        // to= "/ช่วยเหลือ"
         /> 
    
{/* menu adoption */}
    <StyledMenu
      id="menu-adoption"
      MenuListProps={{
        'aria-labelledby': 'demo-customized-button',
      }}
      anchorEl={anchorElAdoption }
      open={openAdoption}
   
      onClose={handleCloseAdoption }  
    >  
      <MenuItem onClick={()=> {handleCloseAdoption(); setValue(1)}} component={Link} to='/การรับเลี้ยงสัตว์/ข้อมูลเบื้องต้นการรับเลี้ยงสัตว์' disableRipple>
        ข้อมูลเบื้องต้นการรับเลี้ยงสัตว์
      </MenuItem>
      <MenuItem onClick={()=> {handleCloseAdoption(); setValue(1)}}component={Link} to='/การรับเลี้ยงสัตว์/การรับเลี้ยงสุนัข' disableRipple>
        การรับเลี้ยงสุนัข
      </MenuItem>
      <MenuItem onClick={()=> {handleCloseAdoption(); setValue(1)}} component={Link} to='/การรับเลี้ยงสัตว์/การรับเลี้ยงแมว'disableRipple>
       การรับเลี้ยงแมว
      </MenuItem>
    </StyledMenu>
{/* menu dogcare */}
    <StyledMenu
      id="menu-dogcare"
      MenuListProps={{
        'aria-labelledby': 'demo-customized-button',
      }}
      anchorEl={anchorElDogCare }
      open={openDogCare}
      onClose={handleCloseDogCare }  
    >  
   <MenuItem onClick={()=> {handleCloseDogCare(); setValue(2)}} component={Link} to='/การดูแลสุนัข/การให้อาหารสุนัข' disableRipple>
        การให้อาหารสุนัข
      </MenuItem>
      <MenuItem onClick={()=> {handleCloseDogCare(); setValue(2)}} component={Link} to='/การดูแลสุนัข/ปัญหาพฤติกรรมสุนัข' disableRipple>
        ปัญหาพฤติกรรมสุนัข
      </MenuItem>
      <MenuItem onClick={()=> {handleCloseDogCare(); setValue(2)}} component={Link} to='/การดูแลสุนัข/การฝึกสุนัข' disableRipple>
        การฝึกสุนัข
      </MenuItem>
      <MenuItem onClick={()=> {handleCloseDogCare(); setValue(2)}} component={Link} to='/การดูแลสุนัข/การทำความสะอาดสุนัข' disableRipple>
        การทำความสะอาดสุนัข
      </MenuItem>
    </StyledMenu>

{/* menu catcare */}
    <StyledMenu
      id="menu-catcare"
      MenuListProps={{
        'aria-labelledby': 'demo-customized-button',
      }}
      anchorEl={anchorElCatCare }
      open={openCatCare}
      onClose={handleCloseCatCare }  
    >  
      <MenuItem onClick={()=> {handleCloseCatCare(); setValue(3)}} component={Link} to='/การดูแลแมว/การให้อาหารแมว' disableRipple>
        การให้อาหารแมว
      </MenuItem>
      <MenuItem onClick={()=> {handleCloseCatCare(); setValue(3)}} component={Link} to='/การดูแลแมว/ปัญหาพฤติกรรมแมว' disableRipple>
        ปัญหาพฤติกรรมแมว
      </MenuItem>
      <MenuItem onClick={()=> {handleCloseCatCare(); setValue(3)}}  component={Link} to='/การดูแลแมว/การฝึกแมว' disableRipple>
        การฝึกแมว
      </MenuItem>
      <MenuItem onClick={()=> {handleCloseCatCare(); setValue(3)}} component={Link} to='/การดูแลแมว/การทำความสะอาดแมว' disableRipple>
        การดูแลความสะอาดแมว
      </MenuItem>
    </StyledMenu>

{/* menu shelter */}
    <StyledMenu
      id="menu-shelter"
      MenuListProps={{
        'aria-labelledby': 'demo-customized-button',
      }}
      anchorEl={anchorElShelter }
      open={openShelter}
      onClose={handleCloseShelter }  
    >  
      <MenuItem onClick={()=> {handleCloseShelter(); setValue(4)}} component={Link} to='/หน้าหลัก/สถานสงเคราะห์' disableRipple>
        ค้นหาสถานสงเคราะห์
      </MenuItem>      
    </StyledMenu>
{/* menu-help */}
    <StyledMenu
      id="menu-help"
      MenuListProps={{
        'aria-labelledby': 'demo-customized-button',
      }}
      anchorEl={anchorElHelp }
      open={openHelp}
      onClose={handleCloseHelp }  
    >  
      <MenuItem onClick={()=> {handleCloseHelp(); setValue(5)}}  component={Link} to='/ช่วยเหลือ/Q&A' disableRipple>
          Q&A
      </MenuItem>      
    </StyledMenu>
    </Tabs>
   
    <Button className ={classes.button} backgroundColor= "secondary" component={Link} to='/สมัครสมาชิก'>สมัครสมาชิก</Button>
    <Button className ={classes.button} backgroundColor= "secondary" component={Link} to='/เข้าสู่ระบบ'>เข้าสู่ระบบ</Button>
   
    {/* <button class="button-primary"  component={Link} to='/สมัครสมาชิก'>สมัครสมาชิก</button>
    <button class="button-primary"  component={Link} to='/เข้าสู่ระบบ'>เข้าสู่ระบบ</button> */}

    
    
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position = "fixed" >
            <Toolbar disableGutters>
              {/* <Button
                 >
                <img alt="logo" className ={classes.logo} src = {logo} /> 
              </Button> */}
              {/* medium ior smaller ? if not render tab */}
              {/* {matches ? drawer : tabs} */}

             {matches ?<Sidebar/> : tabs}
              {/* <Sidebar /> */}

            </Toolbar>
            
      </AppBar>
      </ElevationScroll>
      <div className ={classes.toolbarMargin}/>
    </React.Fragment>
  )
}
