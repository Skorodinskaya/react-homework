const reducer = (state, action) => {
    if (action.obj === '1' && action.act === '+') {
        return {...state, a: state.a+=5}
    } else if (action.obj === '1' && action.act === '-') {
        return {...state, a: state.a-=1}
    }
    return {...state}
}

export default reducer;