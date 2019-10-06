import React from 'react';
import ReactDOM from 'react-dom';
import App from './yandex/App';

import { Provider } from 'react-redux';
import store from './yandex/redux/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);