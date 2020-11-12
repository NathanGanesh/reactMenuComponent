import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
	const [ itemsArray, setItems ] = React.useState(items);

	// setItems(items);

	let categories = [];
	categories.push('all');
	items.map((item) => {
		if (categories.indexOf(item.category) === -1) {
			categories.push(item.category);
		}
	});

	const handleCategoryChange = (category) => {
		// console.log(item);
		const newItems = items.filter((item) => {
			return item.category === category.target.value;
		});

		// console.log(newItems);
		setItems(newItems);

		if (category.target.value === 'all') {
			setItems(items);
		}
	};

	return (
		<main className="main">
			<h2>Our Menu</h2>
			<div className="underline" />
			<div className="category-bar">
				{categories.map((item) => {
					return <Categories category={item} handleCategoryChange={handleCategoryChange} />;
				})}
			</div>
			<div className="menu-grid">
				{itemsArray.map((item) => {
					return <Menu key={item.id} {...item} />;
				})}
			</div>
		</main>
	);
}

export default App;
