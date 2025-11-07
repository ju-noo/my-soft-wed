import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Card = styled.div`
background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 4px 14px rgba(0,0,0,0.06);
display:flex; flex-direction:column; height:100%;
`
const Thumb = styled.div`
height:160px; background-size:cover; background-position:center;
`
const Body = styled.div`
padding:12px 14px; display:flex; flex-direction:column; gap:8px; flex:1;
`
const Title = styled.div`
font-weight:700; font-size:16px;
`
const Summary = styled.div`
font-size:13px; color:#666; flex:1;
`
const Action = styled(Link)`
margin-top:8px; align-self:flex-end; font-size:13px; padding:8px 12px; border-radius:8px;
background:linear-gradient(90deg,#ff9a9e,#fad0c4); color:#222;
`


export default function RecipeCard({recipe}){
return (
<Card>
<Thumb style={{backgroundImage:`url(${recipe.img})`}} />
<Body>
<Title>{recipe.title}</Title>
<Summary>{recipe.summary}</Summary>
<Action to={`/recipe/${recipe.id}`}>레시피 보기</Action>
</Body>
</Card>
)
}