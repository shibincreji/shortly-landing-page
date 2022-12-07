import React from 'react';
import './style.css';

const Button = ({ classes = '', label, onClick }) => {
	return (
		<button className={`btn ${classes}`} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
