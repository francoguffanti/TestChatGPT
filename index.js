import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

import server from './server';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Start the Express server
server.listen(3000, () => {
  console.log('Express server listening on port 3000');
});

serviceWorker.unregister();

