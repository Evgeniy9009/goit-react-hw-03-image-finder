import React from 'react'
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem'

export default function ImageGallery({ items }) {

  return (
  <ul className="gallery">
      <ImageGalleryItem items={ items } />
      </ul>
  )
}
