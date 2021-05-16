import React, { Component, Fragment } from 'react';
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import backgroundImg from "./background.jpg";
import Button from "@material-ui/core/Button";
import MovieCard from '../components/MovieCard';
import { connect } from "react-redux";

//Material ui Icons
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';

import CircularProgess from "@material-ui/core/CircularProgress";

const styles = (theme) => ({
    backgroundBackdrop: {
        position: 'relative',
        display: 'block',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    backDropContainer: {
        height: '100%',
        width: '100%',
        background: 'radial-gradient( rgba(0,0,0,0.005), rgba(0,0,0,0.05), rgba(0,0,0,0.5) , rgba(0,0,0,0.9), rgba(0,0,0,1))',
    },
    backDropShadow: {
        position: 'absolute',
        bottom: '0px',
        left: '0',
        right: '0',
        width: '100%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.95),rgba(0,0,0,0.7),rgba(0,0,0,0.4),rgba(0,0,0,0.1),rgba(0,0,0,0) 400px)',
    },
    backDropContents: {
        position: 'relative',
        width: '92%',
        margin: '0 auto',
        top: '60%',
        textAlign: 'center',
        zIndex: '0',
        '& h3': {
            color: '#fff',
            margin: '0px',
            fontSize: '36px',
            lineHeight: '1.2em',
        },
    },
    getStartedButton: {
        width: '250px',
        margin: 'auto',
        marginTop: '40px',
        borderRadius: '5px',
        padding: '5px 10px',
        background: '#1a6900',
        '& a': {
            textAlign: 'center',
            textDecoration: 'none',
            color: '#d8e0e8',
            fontSize: '24px',
            textTransform: 'uppercase',
            fontFamily: 'sans-serif',
        }
    },
    tagLine: {
        width: '100%',
        background: 'linear-gradient(to bottom, rgba(0,0,0,1),rgba(20,24,28,1))',
        height: '15vh',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        display: 'flex',
        '& h2': {
            fontSize: '18px',
            letterSpacing: '2px',
            fontWeight: '300',
            color: '#9ab',
            fontFamily: 'sans-serif',
        }
    },
    movieGrid: {
        display: 'grid',
        width: '1200px',
        gridTemplateColumns: 'repeat(4, 1fr)',
        margin: '0 auto',
        background: '#1b1b1b',
    }
});

class Homepage extends Component {
    render() {
        const { classes } = this.props;
        const { loading, movies } = this.props.data;
        let recentMoviesMarkUp = !loading ? (
            movies.map((movie) => <MovieCard key={movie.movieId} MovieData={movie} />)
        ) : (
            <div className={classes.circularProgess}>
                <CircularProgess size={200} thickness={2} />
            </div>
        )
        return (
            <Fragment>
                <div className={classes.backgroundBackdrop}>
                    <div className={classes.backDropContainer}>
                        <div className={classes.backDropShadow}>
                            <div className={classes.backDropContents}>
                                <div>
                                    <h3>Track Movie's, Films, T.V.Series, Web-Series, etc that you've watched.</h3><h3>All at one Place.</h3>
                                </div>
                                <Button className={classes.getStartedButton}>
                                    <a href="#">Get Started</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.tagLine}>
                    <h2> A Social Network to connect with Movie lovers. Also Available on <AppleIcon style={{ color: "#9ab" }} /> <AndroidIcon style={{ color: "#9ab" }} /> </h2>
                </div>
                <div className={classes.movieGrid}>
                    {recentMoviesMarkUp}
                </div>
            </Fragment>
        )
    }
}
Homepage.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    data: state.data,
});

const mapActionToProps = {

};
export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Homepage));
