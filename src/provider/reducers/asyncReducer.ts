export default function asyncReducer(
  state = 15,
  action: { type: string; payload: number }
) {
  if (action.type === "MUL") {
    return state * action.payload;
  } else if (action.type === "DIV") {
    return state / action.payload;
  } else {
    return state * 1;
  }
}
