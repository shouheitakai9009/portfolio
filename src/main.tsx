import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { defaultTheme } from './designs/theme.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className={defaultTheme}>
      <App />
    </div>
  </StrictMode>,
)
