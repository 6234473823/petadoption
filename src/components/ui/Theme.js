import { createTheme } from "@mui/material/styles";
const purple = "#d1c4e9"
const green = "#b2dfdb"


export default createTheme({
    palette: {
        common:{
            purple:`${purple}`,
            green : `${green}`,
           
        },
        primary: {
            main:`${purple}`
        },
        secondary:{
            main: `${green}`
        },
       
    },
    typography:{
        //14px
        tab:{
            fontFamily: "Prompt",
            fontWeight: 700,
            fontSize: "18px", 
        },
        estimate:{
            fontSize: "20px",
            fontFamily: "Prompt",
            textTransform: "none",
            color: "white",
        }  ,
        fontFamily:["Prompt","Kanit"].join(",")
    },
    
});