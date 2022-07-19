import React from 'react';
import '../Styles/Criptomoneda.css';
import cripto from '../Images/Bitcoin.png';
function Criptomoneda({ nombre, id, valor, imagen }) {
	return (
		<div className='contenedor-tarjeta'>
			<img src={imagen} alt='moneda' className='img-cripto' />
			<div className='criptomoneda-nombre'>{nombre}</div>
			<div className='criptomoneda-precio'>{valor}</div>
		</div>
	);
}
export default Criptomoneda;
