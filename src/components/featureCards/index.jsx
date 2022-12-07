import React from 'react';
import FeatureCard from './featureCard';
import CardImage1 from '../../images/icon-brand-recognition.svg';
import CardImage2 from '../../images/icon-detailed-records.svg';
import CardImage3 from '../../images/icon-fully-customizable.svg';
import './style.css';

const FeatureCards = () => {
	return (
		<div className='features__cards'>
			<FeatureCard
				image={CardImage1}
				title='Brand Recognition'
				text='Boost your brand recognition with each click. Generic links don’t 
                mean a thing. Branded links help instil confidence in your content.'
				index={0}
			/>
			<FeatureCard
				image={CardImage2}
				title='Detailed Records'
				text='Gain insights into who is clicking your links. Knowing when and where 
                people engage with your content helps inform better decisions.'
				index={1}
			/>
			<FeatureCard
				image={CardImage3}
				title='Fully Customizable'
				text='Improve brand awareness and content discoverability through customizable 
                links, supercharging audience engagement.'
				index={2}
			/>
		</div>
	);
};

export default FeatureCards;
