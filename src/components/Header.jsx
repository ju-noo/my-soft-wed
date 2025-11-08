import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{ background: '#eee', padding: '30px' }}>
      <Link to="/" style={{ marginRight: '20px' }}>메인</Link>
      <Link to="/bmi" style={{ marginRight: '20px' }}>BMI 입력</Link>
      <Link to="/ingredient" style={{ marginRight: '20px' }}>재료 입력</Link>
      <Link to="/recommend" style={{ marginRight: '20px' }}>추천 레시피</Link>
    </header>
  )
}
