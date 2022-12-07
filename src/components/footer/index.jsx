import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Facebook } from '../../images/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../images/icon-twitter.svg';
import { ReactComponent as Instagram } from '../../images/icon-instagram.svg';
import { ReactComponent as Pinterest } from '../../images/icon-pinterest.svg';
import FooterLink from './footerLink';
import './style.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<Logo className='footer__logo' />
				<FooterLink
					title='Features'
					links={['Link Sharing', 'Branded Links', 'Analytics']}
				/>
				<FooterLink title='Resources' links={['Blog', 'Developers', 'Support']} />
				<FooterLink title='Company' links={['About', 'Our Team', 'Careers', 'Contact']} />
				<ul className='socialLinks'>
					<li className='navlink'>
						<Facebook />
					</li>
					<li className='navlink'>
						<Twitter />
					</li>
					<li className='navlink'>
						<Pinterest />
					</li>
					<li className='navlink'>
						<Instagram />
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
