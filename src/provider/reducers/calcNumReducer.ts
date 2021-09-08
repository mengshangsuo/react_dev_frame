export default function calcNumReducer(state = 0, action: { type: string }) {
  if (action.type === "add") {
    return state + 10;
  } else if (action.type === "sub") {
    return state - 10;
  } else {
    return state;
  }
}


