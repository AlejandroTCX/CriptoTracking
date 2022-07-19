import React from 'react';
import '../Styles/Criptoinicio.css';
import Criptomoneda from './Criptomoendas';
import bitcoin from '../Images/Bitcoin.png';
import ethereum from '../Images/Ethereum.png';
import xrp from '../Images/XRP.png';

const divisas = [
	{
		logo: bitcoin,
		nombre: 'bitcoin',
		valor: '410,198.39 MXN',
	},
	{
		logo: xrp,
		nombre: 'XRP',
		valor: '198.39 MXN',
	},
	{
		logo: ethereum,
		nombre: 'Ethereum',
		valor: '10,098.39 MXN',
	},
];
function Criptoinicio() {
	return (
		<div className='contenedor-divisas'>
			<div className='divisas-criptomoneda'>
				{divisas.map((divisa) => (
					<Criptomoneda
						imagen={divisa.logo}
						nombre={divisa.nombre}
						valor={divisa.valor}
					/>
				))}
			</div>
		</div>
	);
}
export default Criptoinicio;
