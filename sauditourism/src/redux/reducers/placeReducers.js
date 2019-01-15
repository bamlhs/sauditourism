const initialState = {
data:[],
loading: true,
selectedItem: []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case 'get_lists':
    return { ...state, loading: false, data: action.payload };

    case 'select_item':
    return { ...state, selectedItem: action.payload };

  default:
    return state
  }
};
