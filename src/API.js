const URI = 'https://api.shrtco.de/v2/shorten';

export const shortenLink = async link => {
	const resp = await fetch(`${URI}?url=${link}`);
	const data = await resp.json();
	return data;
};
