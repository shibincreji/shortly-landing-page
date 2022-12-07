import React from 'react';
import Button from '../button';
import './style.css';

const AsideNav = ({ isNavOpen }) => {
	return (
		<nav className={isNavOpen ? 'asideNav open' : 'asideNav'}>
			<ul className='navlinks-aside '>
				<li className='navlink'>Features</li>
				<li className='navlink'>Pricing</li>
				<li className='navlink'>Resources</li>
				<li className='navlink login'>Login</li>
				<li className='navlink'>
					<Button label='Sign Up' />
				</li>
			</ul>
		</nav>
	);
};

export default AsideNav;
