import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import { connect} from "react-redux";

//icons
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';

const styles = (theme) => ({
    cardsContainer : {
        width: '200px',
        border: '2px solid #ddd',
        height: '300px',
        borderRadius: '5px',
        borderColor: 'rgba(20,24,28,0.6)',
        zIndex: '5',
        backgroundSize: 'contain',
        '& div':{
            width: '90%',
            height: '90%',
            justifySelf: 'center',
            margin: 'auto',
            marginTop: '10px',
            display: 'flex',
            borderRadius: '10px',
            background: 'rgba(0,0,0,0.85)',
            opacity: 0,
            transition: '300ms',
            '&:hover' : {
                opacity: 1,
            },
            '& ul' : {
                display: 'flex',
                height: '90%',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                margin: 'auto',
                padding: 0,
                '& li' :{
                    listStyle: 'none',
                    textAlign: 'center',
                    fontSize: '20px',
                    color: 'rgba(218, 218, 232,0.8)',
                    fontFamily: '"Sen", "sans-serif"',
                }
            }
        }
    }
})

class MovieCard extends Component {
    render() {
        const { classes, MovieData:{Views, Likes, Ratings, url} } = this.props;
        return (
            <div className={classes.cardsContainer} style={{backgroundImage: `url(${url})`, margin: '0 auto',}}>
                <div>
                    <ul>
                        <li><VisibilityIcon style={{color: 'rgba(25,150,75,0.8)'}} /></li>
                        <li>Views: {Views} </li>
                        <li><FavoriteIcon style={{color:'rgba(225,60,25,0.8)'}} /></li>
                        <li>Likes: {Likes} </li>
                        <li><StarIcon style={{color:'rgba(100,50,175,0.8)'}} /></li>
                        <li>Rating: {Ratings} </li>
                    </ul>
                </div>
            </div>
        )
    }
}

MovieCard.propTypes = {
    classes: PropTypes.object.isRequired,
    MovieData: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
}
const mapStateToProps = (state)=> ({
    data: state.data,
})

export default connect(mapStateToProps, {})(withStyles(styles)(MovieCard));
