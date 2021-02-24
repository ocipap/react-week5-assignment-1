const initialState = {
  regions : [],
}

export default function reducer(state = initialState, action) {
  if (action.type === 'chooseRegions') {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    }
  }
  
  return state;
}
