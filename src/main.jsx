import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ContextProvider from './Components/CoinContext/CoinContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ContextProvider>
      <App />
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
