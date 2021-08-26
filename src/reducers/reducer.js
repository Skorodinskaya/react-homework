const reducer = (state, action) => {
    if (action.act === '+') {
        return {...state, a: state.a + action.obj}
    } else if (action.act === '-') {
        return {...state, a: state.a - action.obj}
    }
    return {...state}
}

export default reducer;
