import React from 'react';
import '../Styles/Navbar.css';
import logo from '../Images/logo.png';
import nftlogo from '../Images/nft-logo.jpeg';
function Navbar() {
	return (
		<div className='navbar-contenedor'>
			<img src={logo} className='logo' alt='logotipo' />

			<ul className='navbar-menu'>
				<li className='menu-item'>Inicio</li>
				<li className='menu-item'>My-Tracking</li>
				<li className='menu-item'>Buscar</li>
				<li className='menu-item-avatar'>
					<img src={nftlogo} alt='avatar' className='logo-avatar' />
				</li>
			</ul>
		</div>
	);
}
export default Navbar;
