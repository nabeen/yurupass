import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../stylesheet/NavigationBar.css';
injectTapEventPlugin();

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class NavigationBar extends Component {
	render() {
		return (
			<AppBar
				zDepth={0}
			/>
		)
	}
}

export default NavigationBar;
