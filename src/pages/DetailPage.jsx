import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function DetailPage() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    fetch('/data/dummyRecipes.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => String(r.id) === String(id))
        setRecipe(found || null)
      })
      .catch((err) => {
        console.error('detail fetch error', err)
        setRecipe(null)
      })
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <div style={{ padding: 20 }}>로딩 중...</div>
  if (!recipe) return <div style={{ padding: 20 }}>레시피를 찾을 수 없습니다.</div>

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: '0 auto' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 12 }}>
        ← 뒤로가기</button>
      <h2>{recipe.name}</h2>
      {recipe.summary && <p>{recipe.summary}</p>}

      <h3>재료</h3>
      <ul>
        {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>

      {recipe.steps && recipe.steps.length > 0 ? (
        <>
          <h3>조리 순서</h3>
          <ol>
            {recipe.steps.map((s, i) => <li key={i}>{s}</li>)}
          </ol>
        </>
      ) : (
        <p>조리 순서 정보가 없습니다.</p>
      )}
    </div>
  )
}
