import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
	const [alert, setAlert] = useState(false);
	const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb) // use spread operator to pass individual values to function
	const hexValue = `#${hexColor}`
  // set white color to colors greater than the base - at index 10.
  return (
		<article
			className={`color  ${index > 10 && 'color-light'}`}
			style={{ backgroundColor: `rgb(${bcg})` }}
		>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
    </article>
	);
};

export default SingleColor;
