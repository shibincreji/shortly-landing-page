import React, { useReducer, useState } from 'react';
import { shortenLink } from '../../API';
import Button from '../button';
import Loader from './Loader';
import reducer, { hideError, setLink, showError } from './reducer';
import './style.css';

const initialState = {
	isError: false,
	errorMessage: '',
	link: '',
};

const regExp =
	//eslint-disable-next-line
	/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

const Form = ({ setLinks }) => {
	const [{ isError, errorMessage, link }, dispatch] = useReducer(reducer, initialState);

	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
		if (link === '') {
			return dispatch(showError('please add a link'));
		} else if (!regExp.test(link)) {
			return dispatch(showError('please add a valid link'));
		}
		dispatch(hideError());
		try {
			setIsLoading(true);
			const data = await shortenLink(link);
			if (data.ok) {
				const { full_short_link2 } = data.result;
				setLinks(links => [
					{ original: link, shortened: full_short_link2 },
					...links.filter(_link => _link.original !== link),
				]);
			} else {
				throw new Error(data.disallowed_reason);
			}
		} catch (error) {
			dispatch(showError(error.message));
		} finally {
			dispatch(setLink(''));
			setIsLoading(false);
		}
	};

	return (
		<form className='shortenForm' onSubmit={handleSubmit}>
			<div className={isError ? `shortenForm__input error` : `shortenForm__input`}>
				<input
					type='text'
					placeholder='Shorten a link here...'
					value={link}
					onChange={e => dispatch(setLink(e.target.value))}
				/>
				{isError && <p className='errorText'>{errorMessage}</p>}
			</div>
			<Button label={isLoading ? <Loader /> : 'Shorten!'} classes='shorten' />
		</form>
	);
};

export default Form;
