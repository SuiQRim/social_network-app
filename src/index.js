import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderVD = (store) => 
{
    root.render(
    <React.StrictMode>
        <App state={store.state}  dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
    );
}

store.subscribe(renderVD);

store.renderVD(store);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
