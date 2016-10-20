import React, { Component } from 'react';
import logo from '../yuruyuru.png';
import '../stylesheet/SiteImage.css';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class SiteImage extends Component {
	render() {
		return (
			<div className='__image_content'>
				<div className='description'>
					<h1>Enjoy the LT</h1>
					<h2>LTを楽しもう</h2>
					<a className="btn btn-block btn-social btn-twitter">
					  <span className="fa fa-twitter"></span>
					  Sign in with Twitter
					</a>
				</div>
				<img src={logo} className="logo" alt="logo" />
			</div>
		)
	}
}

export default SiteImage;
