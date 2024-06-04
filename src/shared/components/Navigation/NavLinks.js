import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
	return (
		<ul className='nav-links'>
			<li>
				<NavLink to="/" exact>Show Products</NavLink>
			</li>
			<li>
				<NavLink to="/products/new">Add New Product</NavLink>
			</li>
		</ul>
	);
}

export default NavLinks;