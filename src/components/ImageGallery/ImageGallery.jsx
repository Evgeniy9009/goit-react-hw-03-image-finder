import React from 'react'
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem'
import css from 'components/ImageGallery/ImageGallery.module.css'

export default function ImageGallery({ items, onClick }) {

  return (
    <ul className={css.gallery}>
      <ImageGalleryItem items={ items } onClick= {onClick}  />
    </ul>
  )
}
