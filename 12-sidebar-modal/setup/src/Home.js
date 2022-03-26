import React from 'react';
import { FaBars } from 'react-icons/fa';
import {useGlobalContext} from './context'
const Home = () => {
  const data = useGlobalContext();
  // returns children of AppContext which is accessed via the useContext hook 
  console.log(data)
	return (
		<main>
			<button className='sidebar-toggle'>
				<FaBars />
			</button>
			<button className='btn'>show modal</button>
		</main>
	);
};

export default Home;
