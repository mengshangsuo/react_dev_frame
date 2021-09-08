export default function calcStrAction() {
  return {
    add: {
      type: "add",
      payload: {
        value: "+",
      },
    },
    sub: {
      type: "sub",
      payload: {
        value: "-",
      },
    },
  };
}
