import { useState } from 'react';
import Features from './components/features';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import Outro from './components/outro';

function App() {
	const [links, setLinks] = useState([]);
	return (
		<div className='app'>
			<Header />
			<Hero setLinks={setLinks} />
			<Features links={links} />
			<Outro />
			<Footer />
		</div>
	);
}

export default App;
