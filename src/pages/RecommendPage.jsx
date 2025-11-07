import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function RecommendPage() {
  const [recipes, setRecipes] = useState([])
  const [filtered, setFiltered] = useState([])
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/data/dummyRecipes.json')
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => {
        console.error('dummy fetch error', err)
        setRecipes([])
      })
  }, [])

  useEffect(() => {
    // location.search에서 ingredient 파라(s) 읽기
    const params = new URLSearchParams(location.search)
    const userIngredients = params.getAll('ingredient').map((s) => s.toLowerCase().trim())

    if (userIngredients.length === 0) {
      setFiltered(recipes) // 입력 없으면 전체
      return
    }

    const matched = recipes.filter((r) =>
      r.ingredients.some((ing) =>
        userIngredients.some((u) => ing.trim().toLowerCase() === u.trim().toLowerCase())
      )
    )
    setFiltered(matched)
  }, [location.search, recipes])

  return (
    <div style={{ padding: '20px' }}>
      <h2>추천 레시피</h2>

      {filtered.length === 0 ? (
        <p>입력한 재료로 찾은 레시피가 없습니다.</p>
      ) : (
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {filtered.map((r) => (
            <div
              key={r.id}
              onClick={() => navigate(`/detail/${r.id}`)}
              style={{
                width: 220,
                border: '1px solid #ddd',
                borderRadius: 8,
                padding: 12,
                cursor: 'pointer',
              }}
            >
              <h4 style={{ margin: '6px 0' }}>{r.name}</h4>
              {r.summary && <p style={{ fontSize: 13, color: '#555' }}>{r.summary}</p>}
              <p style={{ fontSize: 12, color: '#888' }}>
                재료: {r.ingredients.slice(0, 3).join(', ')}
                {r.ingredients.length > 3 ? '...' : ''}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
