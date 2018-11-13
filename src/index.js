import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/';
import {Provider} from 'react-redux';

const reduxStore=configureStore();

ReactDOM.render( <Provider store={reduxStore}>
                        <App />
                  </Provider>,
                document.getElementById('root'));
registerServiceWorker();