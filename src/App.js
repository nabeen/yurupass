import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from './component/NavigationBar.js';
import SiteImage from './component/SiteImage.js';

class App extends Component {
  render() {
    return (
    	<div className='content_top'>
	      <MuiThemeProvider>
	        <NavigationBar />
	      </MuiThemeProvider>
	      <SiteImage />
	    </div>
    );
  }
}

export default App;
