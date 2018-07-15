import React from 'react';
import ReactDOM from 'react-dom';
import Game from './containers/Game';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import memoryApp from './reducers';
import thunk from 'redux-thunk';



export const store = createStore(memoryApp, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root'))
registerServiceWorker()


