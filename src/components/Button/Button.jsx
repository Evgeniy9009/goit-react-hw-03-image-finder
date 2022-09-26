import React from 'react'
import css from 'components/Button/Button.module.css'

// const loadMore = () => {
//     this.setState(({ page }) => {
//       return {
//         page: page + 1
//       }  
//     })
//   }

export default function Buton({ text, onClick }) {

  return (
      <button onClick={onClick} className={css.button}>{text }</button>
  )
}
