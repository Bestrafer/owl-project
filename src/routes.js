import React from 'react'
import { Router, Route, Link, IndexRedirect, browserHistory} from 'react-router'
import { render } from 'react-dom'
import HomepageContainer from './homepage/components/homepage'
import GamesContainer from './games/components/games'
import AppContainer from './app'
import NotFound from './not-found/components/not-found'

export default (
    (
        <Router history={ browserHistory }>
            <Route path="/" component={ AppContainer }>
                <IndexRedirect to="homepage" />
                <Route path="homepage" component={ HomepageContainer } />
                <Route path="games" component={ GamesContainer } />
                <Route path="*" component={ NotFound } />
            </Route>
        </Router>
    )
)

