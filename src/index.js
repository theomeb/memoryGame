import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HOF from './reducers';

const store = createStore(HOF)

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root'))
registerServiceWorker()