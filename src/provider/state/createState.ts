export const initState = { num: 0, str: "ab" };

export default function createState(newState: any) {
  return {
    ...initState,
    ...newState,
  };
}
