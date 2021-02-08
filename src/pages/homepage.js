import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import NavigationBar from "../components/navigationBar";
import backgroundImg from "./background.jpg"

const styles = (theme) => ({
    backgroundBackdrop : {
        position: 'relative',
        display : 'block',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    backDropContainer : {
        height:'100%',
        width: '100%',
        background: 'radial-gradient( rgba(0,0,0,0.005), rgba(0,0,0,0.05), rgba(0,0,0,0.5) , rgba(0,0,0,0.9), rgba(0,0,0,1))',
    },
    backDropShadow : {
        position: 'absolute',
        bottom: '0px',
        left: '0',
        right: '0',
        width: '100%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.95),rgba(0,0,0,0.7),rgba(0,0,0,0.4),rgba(0,0,0,0.1),rgba(0,0,0,0) 400px)',
    },
    backDropContents : {
        position: 'relative',
        width: '92%',
        margin: '0 auto',
        top: '60%',
        textAlign: 'center',
        zIndex: '0',
        '& h3' : {
            color: '#fff',
            margin:'0px',
            fontSize: '36px',
            lineHeight: '1.2em',
        },
    },
    getStartedButton : {
        width: '250px',
        margin: 'auto',
        marginTop: '40px',
        borderRadius: '5px',
        padding: '5px 10px',
        background: '#1a6900',
        '& a' : {
            textAlign: 'center',
            textDecoration: 'none',
            color: '#d8e0e8',
            fontSize: '24px',
            textTransform: 'uppercase',
            fontFamily: 'sans-serif',
        }
    }
});

export class homepage extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.backgroundBackdrop}>
                <div className={classes.backDropContainer}>
                    <NavigationBar/>
                    <div className={classes.backDropShadow}>
                        <div className={classes.backDropContents}>
                            <div>
                                <h3>Track Movie's, Films, T.V.Series, Web-Series, etc that you've watched.</h3><h3>All at one Place.</h3>
                            </div>
                            <div className={classes.getStartedButton}>
                                <a href="#">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
homepage.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(homepage);
