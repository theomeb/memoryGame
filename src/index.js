import React from 'react';
import ReactDOM from 'react-dom';
import Game from './containers/Game';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import memoryApp from './reducers';


export const store = createStore(memoryApp)

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root'))
registerServiceWorker()


