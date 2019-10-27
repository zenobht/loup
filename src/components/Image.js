import React from 'react'
import { object } from 'prop-types'
import useBreakpoints from '../hooks/useBreakpoints'
import './Image.css'

const getImageSizeProp = breakpoint => {
  if (breakpoint >= 1200) {
    return 'landscapemobile2x'
  }
  return 'landscapemobile1x'
}

const Image = props => {
  const { imageList } = props
  const breakpoint = useBreakpoints()

  return (
    <img className="image" src={imageList[getImageSizeProp(breakpoint)].url} />
  )
}

Image.propTypes = {
  imageList: object,
}

export default Image
