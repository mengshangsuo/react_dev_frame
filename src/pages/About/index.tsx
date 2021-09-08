import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import calcStrAction from '../../provider/actions/calcStrAction'
import asyncAction from '../../provider/actions/asyncAction';
import request from '../../http/request';
import { LOGIN } from '../../http/apiIp';

const mapStateToProps = (state: { num: any; }) => state;

function About(_props: any) {
  useEffect(() => {
    request({ url: LOGIN }).then(res => {
      console.log('request({ url: LOGIN })', res)
    });
    return () => {
    }
  }, [])


  const calcActions = calcStrAction();
  console.log('_props', _props);
  return (
    <div>
      <h2>About</h2>

      <h1>同步：{_props.num}</h1>
      <h2>异步：{_props.asyncNum}</h2>

      <button onClick={
        () => {
          _props.dispatch(
            calcActions.add
          );
        }
      }>+10</button>

      <button onClick={
        () => {
          _props.dispatch(
            calcActions.sub
          );
        }
      }>-10</button>


      <button onClick={
        () => {
          _props.dispatch(
            asyncAction.multiplication
          );
        }
      }>X 10</button>

      <button onClick={
        () => {
          _props.dispatch(
            asyncAction.divisiondivision
          );
        }
      }>/ 10</button>
    </div >
  )
}

export default connect(mapStateToProps)(About);
