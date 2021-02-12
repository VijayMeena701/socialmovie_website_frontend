import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import {Provider} from 'react-redux';
import home from './pages/homepage';
import store from './redux/store';

import NavBar from './components/navigationBar';

const theme = createMuiTheme({
  palette:{
    typography:{
      useNextVariants: true,
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <NavBar/>
              <div className="container">
                <Switch>
                  <Route exact path='/' component={home}/>
                </Switch>
              </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App
