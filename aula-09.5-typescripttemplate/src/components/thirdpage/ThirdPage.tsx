
import React from 'react';
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';

function SubPage() {
  const { usedPage } : any = useParams();
    return (
        <div>
            <h1>{usedPage}</h1>
        </div>
    );
}

export const ThirdPage = () => {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h1>Third Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={`${url}/3-1`}>Sub-page-1</Link>
                    </li>
                    <li>
                        <Link to={`${url}/3-2`}>Sub-page-2</Link>
                    </li>
                    <li>
                        <Link to={`${url}/3-3`}>Sub-page-3</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact={true} path={path}>
                    <h3>Please select a sub-page.</h3>
                </Route>
                <Route path={`${path}/:usedPage`}>
                    <SubPage />
                </Route>
            </Switch>
        </div>
    );
};