import React from 'react';

const Categories = ({ category, handleCategoryChange }) => {
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const category2 = capitalizeFirstLetter(category);
	return (
		<button className="category-item" value={category} onClick={(event) => handleCategoryChange(event)}>
			{category2}
		</button>
	);
};

export default Categories;
