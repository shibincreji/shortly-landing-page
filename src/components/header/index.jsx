import React, { useEffect, useState } from 'react';
import Logo from '../../images/logo.svg';
import AsideNav from '../asideNav';
import Button from '../button';
import { GiHamburgerMenu } from 'react-icons/gi';
import './style.css';

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	useEffect(() => {
		isNavOpen
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'auto');
	}, [isNavOpen]);

	return (
		<header className='header'>
			<div className='container'>
				<img src={Logo} alt='logo' className='logo' />
				<nav>
					<ul className='header__navlinks'>
						<li className='navlink'>Features</li>
						<li className='navlink'>Pricing</li>
						<li className='navlink'>Resources</li>
						<li className='navlink login'>Login</li>
						<li className='navlink'>
							<Button label='Sign Up' />
						</li>
					</ul>
				</nav>
				<GiHamburgerMenu
					className='hamburger'
					onClick={() => {
						setIsNavOpen(!isNavOpen);
					}}
				/>
				<AsideNav isNavOpen={isNavOpen} />
			</div>
		</header>
	);
};

export default Header;
