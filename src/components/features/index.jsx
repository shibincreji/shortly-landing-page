import FeatureCards from '../featureCards';
import ShortenedLink from '../shortenedLink';
import './style.css';

const Features = ({ links }) => {
	return (
		<section className='features'>
			{links.map(link => (
				<ShortenedLink
					original={link.original}
					shortened={link.shortened}
					key={link.original}
				/>
			))}
			<div className='container'>
				<h2 className='features__title'>Advanced Statistics</h2>
				<p className='features__text'>
					Track how your links are performing across the web with our advanced statistics
					dashboard.
				</p>
				<FeatureCards />
			</div>
		</section>
	);
};

export default Features;
