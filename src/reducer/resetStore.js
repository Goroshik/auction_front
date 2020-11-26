const initialState = null;

export function resetStore(state = initialState, action) {
  switch (action.type) {
    case 'RESET_STORE':
    default:
      return state;
  }
}