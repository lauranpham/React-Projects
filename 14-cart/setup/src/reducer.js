const reducer = (state, action) => {
    // state is current state before update
    // action is what we are trying to do 
    if (action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }
    return state
}

export default reducer