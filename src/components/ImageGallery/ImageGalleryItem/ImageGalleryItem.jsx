import React from 'react'
import css from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem.module.css'
// import { nanoid } from 'nanoid'


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

