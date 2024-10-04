import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import axios from 'axios'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {storeRedux} from './redux/storeRedux.js'



axios.defaults.withCredentials = true

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={storeRedux}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);