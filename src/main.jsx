import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import ProjectArchive from './pages/project-archive.jsx' // Adjust the import path as needed
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project-archive" element={<ProjectArchive />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
