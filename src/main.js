import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

render(
    <Provider store={ store }>
        { routes }
    </Provider>,
    document.getElementById('app')
)
