import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './pages/MainPage'
import IngredientInputPage from './pages/IngredientInputPage'
import BMIPage from './pages/BMIpage'
import RecommendPage from './pages/RecommendPage'
import DetailPage from './pages/DetailPage'

export default function App() {
  return (
    <Router>
      <Header />
      <div style={{ minHeight: '80vh' }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ingredient" element={<IngredientInputPage />} />
        <Route path="/bmi" element={<BMIPage />} />
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  )
}
