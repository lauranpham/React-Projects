import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
	const [color, setColor] = useState('');
	const [error, setError] = useState(false);
	const [list, setList] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(color);
		// wrap Values call in a try and catch. will catch error from the new Value call.
		try {
			let colors = new Values(color).all(10);
			setList(colors);
			setError(false);
			console.log(colors);
		} catch (error) {
			console.log(error);
			setError(true);
		}
	};
	return (
		<>
			<section className='container'>
				<h3>color generator</h3>
				<form action='' onSubmit={handleSubmit}>
					<input
						type='text'
						value={color}
						placeholder='#f15025'
						onChange={(e) => setColor(e.target.value)}
						className={`${error ? 'error' : null}`}
					/>
					<button className='btn' type='submit'>
						submit
					</button>
				</form>
			</section>
			<section className='colors'>
				{list.map((color, index) => {
					return (
						<SingleColor
							key={index}
							{...color}
							index={index}
							hexColor={color.hex}
						/>
					);
				})}
			</section>
		</>
	);
}

export default App;
