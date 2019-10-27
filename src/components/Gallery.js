import React, { useEffect } from 'react'
import { func, array } from 'prop-types'

const Gallery = props => {
  const { getRecipes, recipes } = props

  useEffect(() => {
    if (recipes.length === 0) {
      getRecipes()
    }
  }, [])

  return (
    <section>
      {recipes.map(recipe => (
        <div key={recipe.contentId}>{recipe.title}</div>
      ))}
    </section>
  )
}

Gallery.propTypes = {
  getRecipes: func,
  recipes: array,
}

Gallery.defaultProps = {
  recipes: [],
}

export default Gallery
