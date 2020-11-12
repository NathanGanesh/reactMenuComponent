import React from 'react';

const Menu = (props) => {
	const { title, price, img, desc } = props;
	console.log(props);
	return (
		<article className="menu-item">
			<img src={img} alt={title} />
			<div className="menu-items">
				<div className="menu-description">
					<h4 className="menu-title">{title}</h4>
					<h4 className="menu-price">$ {price}</h4>
				</div>
				<div className="menu-underline" />
				<div className="menu-desc">{desc}</div>
			</div>
		</article>
	);
};

export default Menu;
