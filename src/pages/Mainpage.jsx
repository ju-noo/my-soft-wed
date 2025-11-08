import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MainPage() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '20px' ,maxWidth:"1000px" ,margin:"0 auto"}}>
      <h2>안녕하세요!! 오늘은 어떤 요리를 하실건가요?</h2>
      <button onClick={() => navigate('/bmi')}>BMI 계산하러 가기</button>
    </div>
  )
}
