import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

// show a dynamic width for the submenu links
// => useRef
const Submenu = () => {
	const {
		isSubmenuOpen,
		location,
		page: { page, links },
	} = useGlobalContext();
	// can destructure an object in an object
	const container = useRef(null);
	const [columns, setColumns] = useState('col-2');

	// change submenu container position whenever nav menu text location changes
	useEffect(() => {
		setColumns('col-2');
		const submenu = container.current;
		const { center, bottom } = location;
		submenu.style.left = `${center}px`;
		submenu.style.top = `${bottom}px`;
		if (links.length === 3) {
			setColumns('col-3');
		}
		if (links.length > 3) {
			setColumns('col-4');
		}
	}, [location, links]);

	return (
		<aside className={`submenu ${isSubmenuOpen && 'show'}`} ref={container}>
			<h4>{page}</h4>
			{/* dynamically change the width with css and interpolation of col- */}
			<div className={`submenu-center ${columns}`}>
				{links.map((link, index) => {
					const { label, icon, url } = link;
					return (
						<a href={url} key={index}>
							{icon}
							{label}
						</a>
					);
				})}
			</div>
		</aside>
	);
};

export default Submenu;
