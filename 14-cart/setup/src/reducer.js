const reducer = (state, action) => {
    // state is current state before update
    // action is what we are trying to do 
    if (action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }
    if (action.type === 'REMOVE') {
        return {...state, cart: state.cart.filter((item) => item.id !== action.payload)} 
    }
    return state
}

export default reducer