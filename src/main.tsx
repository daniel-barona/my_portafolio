import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyPortafolio from './MyPortafolio'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyPortafolio />
  </StrictMode>,
)
