import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookie = cookies.get('Kiddo');

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render = {(props) => (
        (cookie) ? 
        <Component {...props} />
     : <Redirect to = {{
          pathname: '/login',
          state: { from: props.location }
    }}
    />
    )
}
/>
)


export default PrivateRoute;


