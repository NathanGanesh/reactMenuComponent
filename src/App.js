import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
	let categories = [];

	items.map((item) => {
		if (categories.indexOf(item.category) === -1) {
			categories.push(item.category);
		}
	});

	console.log(categories);

	return (
		<main>
			<h2>Our Menu</h2>
			<div className="underline" />
			<div>
				{items.map((item) => {
					return <Categories key={item.id} category={categories} />;
				})}
			</div>
			<div>
				{items.map((item) => {
					return <Menu key={item.id} {...item} />;
				})}
			</div>
		</main>
	);
}

export default App;
