import './App.css';
import Criptoinicio from './Components/CriptoInicio';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Noticias from './Components/Noticias';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Criptoinicio />
			<Noticias />
			<Footer />
		</div>
	);
}

export default App;
