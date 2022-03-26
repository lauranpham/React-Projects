import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

// set up shared states, setstates and functions in provider
const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSideBar = () => setIsSidebarOpen(true)
    const closeSideBar = () => setIsSidebarOpen(false)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    
    return <AppContext.Provider value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        closeModal,
        openSideBar,
        closeSideBar,
    }}>{children}</AppContext.Provider>
}

// custom hook - need to have prefix with 'use'
// prevents multiple imports of useContext and AppContext in files 
// just import useGlobalContext
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}

