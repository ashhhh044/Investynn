import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'

createRoot(document.getElementById('root')!).render( //! tells TypeScript that the element is not null
  <StrictMode>
    <App />
  </StrictMode>,
)
