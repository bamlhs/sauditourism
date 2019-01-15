const initialState = {
data:[],
loading: true,
}

export default (state = initialState, action) => {
  switch (action.type) {

  case 'get_lists':
    return { ...state, loading: false, data: action.payload };

  default:
    return state
  }
};
