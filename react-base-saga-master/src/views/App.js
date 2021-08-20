import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routers from '../routers';

const App = () => (
    <div className='App'>
        <Router>
            <Switch>
                <Switch>
                    {
                        routers.map((route, i) => (
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            <Route exact key={i} {...route} />
                        ))
                    }
                </Switch>
            </Switch>
        </Router>
    </div>
);

export default App;
