// State
// drawer = [
//   toggle: true
// ]

// Actions
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

// Reducers
export default function toggleDrawer (state = [], action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return Object.assign({}, state, {
          completed: !state.completed
        })
    default:
      return state;
  }
}

// Action Creators
export function increment () {
  return {
    type: TOGGLE_DRAWER
  };
}
