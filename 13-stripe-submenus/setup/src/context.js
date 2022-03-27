import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

// set all the shared states, setStates and functions in the AppProvider for
// wrapping around your entire app in index.js
export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
	const [menuText, setMenuText] = useState('');
	const [location, setLocation] = useState({});

	const openSidebar = () => setIsSidebarOpen(true);
	const closeSidebar = () => setIsSidebarOpen(false);
	const openSubmenu = (text, coordinates) => {
		setLocation(coordinates);
		setMenuText(text);
		setIsSubmenuOpen(true);
	};
	const closeSubmenu = () => setIsSubmenuOpen(false);

	// set shared functions and states in Provider value
	return (
		<AppContext.Provider
			value={{
				isSubmenuOpen,
				isSidebarOpen,
				openSubmenu,
				closeSubmenu,
				openSidebar,
				closeSidebar,
				location,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// set up custom hook function
export const useGlobalContext = () => useContext(AppContext);
