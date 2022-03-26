import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

// set all the shared states, setStates and functions in the AppProvider for
// wrapping around your entire app in index.js
export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

	const openSidebar = () => setIsSidebarOpen(true);
	const closeSidebar = () => setIsSidebarOpen(false);
	const openSubmenu = () => setIsSubmenuOpen(true);
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
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// set up custom hook function 
export const useGlobalContext = () => useContext(AppContext);
