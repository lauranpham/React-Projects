import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
	const [alert, setAlert] = useState(false);
	const bcg = rgb.join(',');
	const hex = rgbToHex(...rgb); // use spread operator to pass individual values to function
	const hexValue = `#${hexColor}`;
	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert(false);
		}, 3000);
		return () => clearTimeout(timeout); // clear previous timeout
	}, [alert]);

	return (
		<article
			className={`color  ${index > 10 && 'color-light'}`} 	// set white color to colors greater than the base - at index 10.
			style={{ backgroundColor: `rgb(${bcg})` }}
			onClick={() => {
				setAlert(true);
				navigator.clipboard.writeText(hexValue); // write color text to clipboard for use
			}}
		>
			<p className='percent-value'>{weight}%</p>
			<p className='color-value'>{hexValue}</p>
			{alert && <p className='alert'>copied to clipboard</p>}
		</article>
	);
};

export default SingleColor;
