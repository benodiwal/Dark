import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./store/index.ts";
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='749835838621-qf3jrqeb8lio9blml1pdci3sfenodpl0.apps.googleusercontent.com'>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
