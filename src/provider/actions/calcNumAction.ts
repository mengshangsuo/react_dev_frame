export default function calcNumAction() {
  return {
    add: {
      type: "add",
      payload: {
        value: 20,
      },
    },
    sub: {
      type: "sub",
      payload: {
        value: 20,
      },
    },
  };
}
