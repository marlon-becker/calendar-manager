import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import mySaga from './sagas';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.sass';
import 'bootstrap/dist/css/bootstrap.min.css';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create store using reduces and sagaMiddleware
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
