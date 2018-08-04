import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CheeseList from './components/cheese-list';
import {Provider} from 'react-redux';
import store from './store';

// ReactDOM.render(
// <App />,
//  document.getElementById('root'));

 ReactDOM.render(
    <Provider store={store}>
    <CheeseList />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
