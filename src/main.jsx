import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Contact from './pages/Contact'
import './index.css'
import { ThemeProvider } from './components/ThemeProvider'
import CursorFX from './components/CursorFX'
import Controls from './components/Controls'
import ThemeToggle from './components/ThemeToggle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/test" element={<Test />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <ThemeToggle />
      <CursorFX />
      <Controls />
    </ThemeProvider>
  </React.StrictMode>,
)
