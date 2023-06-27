import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react'

//Redux Imports
import { store, persistor } from './states/store'
import { Provider } from 'react-redux'

//Firebase
import { app } from './firebase.config.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store} app={app}>
          <PersistGate loading={'loading...'}  persistor={persistor} >
            <App />
          </PersistGate>
      </Provider>
  </React.StrictMode>,
)
