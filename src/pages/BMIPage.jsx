import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BMIPage() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState(null)
  const [category, setCategory] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const navigate = useNavigate()

  const calculateBMI = () => {
    if (!height || !weight) return

    const h = parseFloat(height) / 100
    const w = parseFloat(weight)
    const result = w / (h * h)
    const bmiValue = result.toFixed(2)
    setBmi(bmiValue)

    let type = ''
    if (result < 18.5) type = '저체중'
    else if (result < 25) type = '정상'
    else if (result < 30) type = '과체중'
    else type = '비만'

    setCategory(type)
    setIsComplete(true)

    // 5초 뒤 재료입력 페이지로 이동 (bmiCategory 전달)
    setTimeout(() => {
      navigate('/ingredient')
    }, 5000)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>BMI 계산기</h2>

      {!isComplete ? (
        <>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="number"
              placeholder="키(cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="number"
              placeholder="몸무게(kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button onClick={calculateBMI}>계산</button>

          {bmi && (
            <div style={{ marginTop: '20px' }}>
              <p>BMI: {bmi}</p>
              <p>분류: {category}</p>
            </div>
          )}
        </>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <h3>BMI 계산이 완료되었습니다!</h3>
          <p>결과: {category}입니다.</p>
          <p>잠시 후 재료입력 페이지로 이동합니다...</p>
        </div>
      )}
    </div>
  )
}
