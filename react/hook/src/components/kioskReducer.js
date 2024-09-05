function kioskReducer(state, action) {
    switch (action.type) {
        case 'SANDWICH':
            return state + 5000;
        case 'FRIES':
            return state + 1500;
        case 'DRINK':
            return state + 1000;
        case 'SALAD':
            return state + 3000;
        default:
            return state;
    }
}

export default kioskReducer;