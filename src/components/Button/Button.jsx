import React from 'react'
import css from 'components/Button/Button.module.css'

export default function Buton({ text, onClick }) {

  return (
      <button onClick={onClick} className={css.button}>{text }</button>
  )
}
