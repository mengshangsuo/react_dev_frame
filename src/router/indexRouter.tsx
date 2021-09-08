import React from 'react';
import {
  Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';

import { routerConfig } from './routerConfig';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

// 生成一维的数组
function getRouterConfig(routerConfig: any[]) {
  const routes: any[] = [];
  function setRouterConfig(configArr: any[]) {
    configArr.forEach(item => {
      if (item.children && item.children.length) {
        const newItem = { ...item };
        delete newItem.children;
        routes.push(newItem);
        setRouterConfig(item.children);
      } else {
        routes.push(item)
      }
    });
    console.log('routes', routes)
  }
  setRouterConfig(routerConfig);
  return routes;
}

function gerateRouterChlidren(routerConfigArray: any[]) {
  console.log('routerConfigArray', routerConfigArray)
  return routerConfigArray.map(item => (<Route
    exact
    path={item.path}
    component={item.component}
    key={item.id}
  ></Route>));
}

function BuildRouter() {
  return (
    <Router history={history}>
      <Switch>
        {gerateRouterChlidren(getRouterConfig(routerConfig))}
        {/* <Redirect to='/'></Redirect> */}
      </Switch>
    </Router>
  )
}

export default BuildRouter;
