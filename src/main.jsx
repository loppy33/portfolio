import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.sass'
import { ThemeProvider } from './ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
