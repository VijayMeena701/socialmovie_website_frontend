import {React, Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from "prop-types"
import MenuIcon from '@material-ui/icons/Menu';
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    cntr: {
        display:"table",
        height:"100%",
    },
    cntrInnr : {
        display: "table-cell",
        textAlign: "center",
        verticalAlign: "middle",
        transform: `scale(${0.8})`,
    },
    search : {
        '&::after':{
            content: '""',
            position: 'absolute',
            width: '3px',
            height: '20px',
            right: '-5px',
            top: '21px',
            background: '#d8e0e8',
            borderRadius: '3px',
            transform: `rotate(-45deg)`,
            transition: 'all 200ms ease',
        },
        display: "inline-block",
        position: "relative",
        height: "35px",
        width: "35px",
        boxSizing: "border-box",
        margin: "0px 8px 7px 0px",
        padding: "7px 9px 0px 9px",
        border: "3px solid #d8e0e8",
        borderRadius: "25px",
        transition: "all 200ms ease",
        cursor: "text",
        "&.active":{
            '&::after':{
                height: "0px",
            },
            width: '300px',
            height: '100%',
            marginBottom: "0px",
            marginRight: '0px',
            borderColor: '#ffffff',
        },
    },
    inptSearch : {
        width: "100%",
        height: "100%",
        border: "none",
        boxSizing: "border-box",
        fontSize: "22px",
        marginBottom: "5px",
        marginRight: "0px",
        color: '#D8E0E8',
        background: 'transparent',
        outlineWidth: '0px',
    },
    logoContainer :{
        display: 'flex',
        color: '#999',
        fontSize: '36px',
        letterSpacing: '12px',
        fontWeight: '800',
        fontFamily: 'monospace',
    }
});

class NavigationBar extends Component {
    //function to toggle active class on focus
    onFocus() {
        this.myInput.parentElement.classList.toggle("active");
    }
    //function to toggle active class on blur        
    onBlur() {
        this.myInput.parentElement.classList.toggle("active");
        this.myInput.value = "";    //clear everything in input tag when blurred
    }
    render(){
        const {classes} = this.props;
        return(
        <div className={classes.root}>
            <AppBar position="absolute" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.05))', opacity: '0.7'}}>
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <div className={classes.logoContainer}>LO<span>G</span>O</div>
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Films</Button>
                <Button color="inherit">My List</Button>
                <Button color="inherit">People</Button>
                <div className={classes.cntr}>
                    <div className={classes.cntrInnr}>
                        <label className={classes.search} htmlFor="inpt_search">
                            <input className={classes.inptSearch} ref={input => {this.myInput = input;}} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} id="inpt_search" type="text" maxLength="25"/>
                        </label>
                    </div>
                </div>
                </Toolbar>
            </AppBar>
        </div>
        );
    }
}
NavigationBar.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(NavigationBar);