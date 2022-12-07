const SET_LINK = 'SET LINK';
const SHOW_ERROR = 'SHOW ERROR';
const HIDE_ERROR = 'HIDE ERROR';

export const setLink = link => ({ type: SET_LINK, payload: link });
export const showError = errorMessage => ({ type: SHOW_ERROR, payload: errorMessage });
export const hideError = () => ({ type: HIDE_ERROR });

const formReducer = (state = {}, action) => {
	switch (action.type) {
		case SET_LINK: {
			return { ...state, link: action.payload };
		}
		case SHOW_ERROR: {
			return { ...state, errorMessage: action.payload, isError: true };
		}
		case HIDE_ERROR: {
			return { ...state, errorMessage: '', isError: false };
		}

		default: {
			return state;
		}
	}
};

export default formReducer;
