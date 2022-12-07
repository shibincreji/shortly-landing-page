import Button from '../button';
import Form from '../form';
import './style.css';

const Hero = ({ setLinks }) => {
	return (
		<main className='hero'>
			<div className='intro'>
				<div className='container'>
					<h1 className='hero__title'>More than just shorter links</h1>
					<p className='hero__text'>
						Build your brand's recognition and get detailed insights on how links are
						performing.
					</p>
					<Button label='Get Started' classes='cta' />
				</div>
			</div>
			<div className='container'>
				<Form setLinks={setLinks} />
			</div>
		</main>
	);
};
export default Hero;
