import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function IngredientInputPage() {
  const [input, setInput] = useState('')
  const [ingredients, setIngredients] = useState([])
  const navigate = useNavigate()

  const handleAdd = () => {
    const v = input.trim()
    if (!v) return
    setIngredients((s) => [...s, v])
    setInput('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // 엔터로 재료 추가
      handleAdd()
    }
  }

  const handleComplete = () => {
    // 재료들을 쿼리(간단한 형태)로 전달하거나, state 전달 방식으로 바꾸려면 쉽게 변경 가능
    // 여기서는 첫 재료 하나만 예시로 전달 — 여러개 전달하려면 URLSearchParams로 직렬화
    const q = new URLSearchParams()
    ingredients.forEach((ing) => q.append('ingredient', ing))
    navigate(`/recommend?${q.toString()}`)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>재료 입력</h2>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          type="text"
          placeholder="예: 김치, 두부 (엔터로 추가)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{ flex: 1, padding: 8 }}
        />
        <button onClick={handleAdd} style={{ padding: '8px 12px' }}>추가</button>
      </div>

      {ingredients.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <strong>입력된 재료:</strong>
          <ul>
            {ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={handleComplete} style={{ padding: '10px 16px' }}>
        완료 (추천 받기)
      </button>
    </div>
  )
}
