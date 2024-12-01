import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { MainRoutes } from '@/routes/mainRoutes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {MainRoutes}/>
  </StrictMode>
);
