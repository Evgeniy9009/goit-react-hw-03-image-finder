import React from 'react'
import css from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem.module.css'
// import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'


export default function ImageGalleryItem({items, onClick}) {
  console.log(items)
  // const itemId=nanoid()
  const elements = items.map(({ id, webformatURL, largeImageURL }) =>
    <li key={id} className={css.galleryItem} onClick={() => onClick({largeImageURL})}>
      <img className={css.galleryItemImage} src={webformatURL} alt="" />
    </li>)
  return (
    <>
      {elements}
    </>
    
  )
}

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf( 
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL:PropTypes.string.isRequired
    })
  ),
  onClick: PropTypes.func.isRequired
}

