import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <>
    <nav>
        <ul>
            <li>
                <NavLink to="/" activeStyle={{ color: 'green' }} exact={true}>
                    First page
                </NavLink>
            </li>
            <li>
                <NavLink to="/second" activeStyle={{ color: 'green' }} exact={true}>
                    Second Page
                </NavLink>
            </li>
            <li>
                <NavLink to="/third" activeStyle={{ color: 'green' }}>
                    Third page
                </NavLink>
            </li>
        </ul>
    </nav>
  </>
);