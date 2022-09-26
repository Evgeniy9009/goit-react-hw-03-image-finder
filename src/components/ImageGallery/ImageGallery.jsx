import React from 'react'
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem'
import css from 'components/ImageGallery/ImageGallery.module.css'
import PropTypes from 'prop-types'

export default function ImageGallery({ items, onClick }) {

  return (
    <ul className={css.gallery}>
      <ImageGalleryItem items={ items } onClick= {onClick}  />
    </ul>
  )
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf( 
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL:PropTypes.string.isRequired
    })
  ),
  onClick: PropTypes.func.isRequired
}