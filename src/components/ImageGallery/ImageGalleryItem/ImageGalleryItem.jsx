import React from 'react'



export default function ImageGalleryItem({items}) {
  console.log(items)
  const elements = items.map(({id, webformatURL}) => <li key={id} className="gallery-item">
            <img src={webformatURL} alt="" />
        </li>)
  return (
    <>
      {elements}
    </>
    
  )
}

