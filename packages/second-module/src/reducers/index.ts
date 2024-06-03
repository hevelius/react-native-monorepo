// Example reducer
const reducer = (
  state = { data: 'Initial data' },
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case 'SM_SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default reducer;
