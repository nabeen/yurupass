import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from './component/NavigationBar.js';
import SiteTop from './component/SiteTop.js';

class App extends Component {
  render() {
    return (
    	<div className='content_top'>
	      <MuiThemeProvider>
	        <NavigationBar />
	      </MuiThemeProvider>
	      <SiteTop />
	    </div>
    );
  }
}

export default App;
