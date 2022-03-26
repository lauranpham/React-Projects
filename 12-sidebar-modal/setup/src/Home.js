import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
const Home = () => {
	const { openSidebar, openModal } = useGlobalContext();
	// returns children of AppContext which is accessed via the useContext hook
	return (
		<main>
			<button className='sidebar-toggle' onClick={openSidebar}>
				<FaBars />
			</button>
			<button className='btn' onClick={openModal}>
				show modal
			</button>
		</main>
	);
};

export default Home;
