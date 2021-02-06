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
});

class NavigationBar extends Component {
    render(){
        const {classes} = this.props;
        return(
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: 'transparent'}}>
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
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