// redux-thunk 解决异步数据流向的问题

const asyncAction = {
  multiplication: (dispatch: any) => {
    setTimeout(() => {
      dispatch({
        type: "MUL",
        payload: 10,
      });
    }, 5000);
  },
  divisiondivision: (dispatch: any) => {
    setTimeout(() => {
      dispatch({
        type: "DIV",
        payload: 10,
      });
    }, 2000);

    // 发送异步请求
    // 将请求结果返回
  },
};

export default asyncAction;
