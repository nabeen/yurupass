import React, { Component } from 'react';
import logo from '../yuruyuru.png';
import '../stylesheet/SiteImage.css';
import GithubButton from './GithubButton.js'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class SiteTop extends Component {
	render() {
		return (
			<div className='__image_content'>
				<img src={logo} className="logo" alt="logo" />
				<div className='description'>
					<h1>yurupass</h1>
					<h2>LTを楽しもう</h2>
				</div>
			</div>
		)
	}
}

export default SiteTop;
