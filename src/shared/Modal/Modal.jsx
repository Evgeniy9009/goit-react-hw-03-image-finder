import { Component } from 'react'
import { createPortal } from 'react-dom'
import css from 'shared/Modal/Modal.module.css'

const modalRoot= document.getElementById("modal-root")

// export default function Modal(onClose, modalContent) {
//   const {largeImageURL} = modalContent
//   return (
    
//   )
// }



export default class Modal extends Component {

  componentDidMount() {
    document.addEventListener("keydown", this.closeModal)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown" , this.closeModal)
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      this.props.onClose()
    }
  }

  render () {
    const { largeImageURL } = this.props
    console.log(this.props)
    return createPortal(
      <div className={css.overlay} onClick={this.closeModal}>
        <div className={css.modal}>
            <img src={largeImageURL} alt="" />
        </div>
    </div>, modalRoot
    )
  }
}

