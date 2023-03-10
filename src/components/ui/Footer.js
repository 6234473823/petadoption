import React from "react";
import {makeStyles} from "@material-ui/core/";
// import footerAdorment from "../../assests/Footer Adorment/png";

const useStyles = makeStyles( theme => ({
    footer :{
        backgroundColor : theme.palette.common.purple,
        width: "100%",
        zIndex: 1302,
        position: "fixed",
        bottom:"0",
        color: "grey"
    }
}))

export default function Footer(){
    const classes = useStyles();

    return <footer className ={classes.footer} >
        footer
    </footer>
}