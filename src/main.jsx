import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './RootLayout.jsx'
import AllProjects from './AllProjects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} >
          <Route path="/" element={<App />} />
          <Route path="/allprojects" element={<AllProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
