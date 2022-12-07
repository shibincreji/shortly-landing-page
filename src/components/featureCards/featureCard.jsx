import React from 'react';

const FeatureCard = ({ image, title, text, index }) => {
	return (
		<article className='featureCard' style={{ marginTop: `calc(var(--s5) * ${index})` }}>
			<div className='featureCard__image'>
				<img src={image} alt={title} />
			</div>
			<h3 className='featureCard__title'>{title}</h3>
			<p className='featureCard__text'>{text}</p>
		</article>
	);
};

export default FeatureCard;
