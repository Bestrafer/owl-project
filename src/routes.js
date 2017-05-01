import React from 'react'
import { Router, Route, Link, IndexRoute, browserHistory} from 'react-router'
import { render } from 'react-dom'
import HomepageContainer from './homepage/components/homepage'
import GamesContainer from './games/components/games'
import AppContainer from './app'

export default (
    (
        <Router history={ browserHistory }>
            <Route path="/" component={ AppContainer }>
                <IndexRoute component={ HomepageContainer } />
                <Route path="games" component={ GamesContainer } />
            </Route>
        </Router>
    )
)

