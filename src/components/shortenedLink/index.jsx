import React, { useState } from 'react';
import Button from '../button';
import './style.css';

const ShortenedLink = ({ original, shortened }) => {
	const [copied, setCopied] = useState(false);
	return (
		<div className='container'>
			<div className='shortenedLink'>
				<p className='original'>{original}</p>
				<p className='shortened'>{shortened}</p>
				<Button
					label={copied ? 'Copied' : 'Copy'}
					classes={copied ? 'copyBtn copied' : 'copyBtn'}
					onClick={() => {
						setCopied(true);
						navigator.clipboard.writeText(shortened);
						setTimeout(() => {
							setCopied(false);
						}, 2000);
					}}
				/>
			</div>
		</div>
	);
};

export default ShortenedLink;
