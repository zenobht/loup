import React, { useEffect } from 'react'
import { func, array } from 'prop-types'
import Image from './Image'
import './Gallery.css'

const Gallery = props => {
  const { getRecipes, recipes } = props

  useEffect(() => {
    if (recipes.length === 0) {
      getRecipes()
    }
  }, [])

  return (
    <section className="container columns">
      {recipes.map(recipe => (
        <div className="card" key={recipe.contentId}>
          <Image imageList={recipe.imageList} />
          <div className="card-title">{recipe.title}</div>
        </div>
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
