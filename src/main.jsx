import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Home } from './Home/home.jsx'
import { FoodIndex } from './foodproject/foodindex/foodindex.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FoodIndex />
  </StrictMode>,
)
