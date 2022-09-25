import React from 'react'
import css from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem.module.css'



export default function ImageGalleryItem({items, onClick}) {
  console.log(items)
  const elements = items.map(({ id, webformatURL, largeImageURL }) =>
    <li key={id} className={css.galleryItem}>
      <img className={css.galleryItemImage} src={webformatURL} alt="" data={largeImageURL} onClick={onClick} />
    </li>)
  return (
    <>
      {elements}
    </>
    
  )
}

