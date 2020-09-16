
import React from 'react';
import { Route } from 'react-router-dom'
import HomeLayout from './HomeLayout';
 
const RouteLayout = ({ component: Component, ...rest }) => {
    console.log(Component);

    return (
        <Route {...rest} render={props => (
            <HomeLayout>
                <Component {...props} />
            </HomeLayout>
        )} />
    )
};
 
export default RouteLayout;