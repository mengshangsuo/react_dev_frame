export default function calcStrReduce(
  state = "a",
  action: { type: string; value: number }
) {
  if (action.type === "add") {
    return state + "+";
  } else if (action.type === "sub") {
    return state + "-";
  } else {
    return state;
  }
}
