import { Component } from 'react'
import css from 'components/Searchbar/Searchbar.module.css'
// import { nanoid } from 'nanoid'


export default class Searchbar extends Component {
  state = {
    search: ""
  }

  // searchId = nanoid()

  handleChange = (e) => {
    console.log("handleChange")
    const { name, value } = e.target 
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("handleSubmit")
    const { onSubmit } = this.props
    onSubmit({ ...this.state })
        console.log(onSubmit)
    this.reset()
  }

  reset() {
    this.setState({
      search: ""
    })
  }

  render() {
    const { search } = this.state
    const { handleChange, handleSubmit} = this
    return (
        <header className={css.searchbar}>
            <form onSubmit={handleSubmit} className={css.form}>
                <button onClick={handleSubmit} type="submit" className={css.button}>
                  <span className={css.buttonLabel}>Search</span>
                </button>
          <input
            onChange={handleChange}
                  value={search}
                  className={css.input}
                  type="text"
                  name="search"
                  // autocomplete="off"
                  // autofocus
                  placeholder="Search images and photos"
                />
            </form>
        </header>
    )
  }
}