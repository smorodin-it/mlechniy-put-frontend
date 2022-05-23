import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }: RouteProps): JSX.Element => {
  return <Route {...rest}></Route>;
};

export default PrivateRoute;
