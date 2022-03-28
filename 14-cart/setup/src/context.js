import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  // useReducer requires reducer function and initial state
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'}) //convention is to use uppercase for action types
  }

  const remove = (id) => {
    dispatch({type: 'REMOVE', payload: id}) //send through additional action info in payload
  }

  const increase = (id) => {
    dispatch({type: 'INCREASE', payload: id})
  }

  const decrease = (id) => {
    dispatch({type: 'DECREASE', payload: id})
  }

  useEffect(() => {
    // update amount every time the cart updates
    dispatch({type: 'GET_TOTALS'})
  }, [state.cart])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
