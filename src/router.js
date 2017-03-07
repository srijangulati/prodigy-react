import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory  } from 'react-router';
import App from 'components/app';
import Home from 'components/home/home';

export default class RoutesClass extends React.Component{

  render(){
    const navigations = [
      'home',
      'cAndM',
      'es',
      'dcp',
      'branches',
      'gallery',
      'pgp'
    ];
    var navigationComponents = navigations.map((route,key)=>
      require('components/'+route.toLowerCase()+'/'+route.toLowerCase())
    );
    const routes = navigations.map((route,key)=>
      <Route key={key} path={route} component={navigationComponents[key].default} />
    );
    return (
      <Router history = {hashHistory}>
       <Route path = "/" component = {App}>
          <IndexRoute component = {Home} />
            {routes}
            </Route>
         </Router>
    );
  }
}
