import { Component } from 'react'

import { searchPosts } from 'shared/api/api'
import Searchbar from 'components/Searchbar/Searchbar'
import Loader from 'shared/Loader/Loader'
import ImageGallery from 'components/ImageGallery/ImageGallery'

export default class PostsSearch extends Component {

  state = {
    items: [],
    loading: false,
    error: null,
    search: "",
    page: 1,
    modalOpen: false,
    modalContent: {
      body: "",
    }
  }

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state
    if ((search && prevState.search !== search) || page > prevState.page) {
      this.fetchPosts(search, page)
    }
  }

  async fetchPosts() {
    const { search, page } = this.state
    this.setState({
      loading: true
    })
    try {
      const data = await searchPosts(search, page)
      this.setState(({ items }) => {
        return {
          items: [...items, ...data]
        }
      })
    } catch (error) {
      this.setState({
        error
      })      
    } finally {
      this.setState({
        loading: false
      })
    }
  }

  onSearch = ({ search }) => {
    this.setState({
      search
    })
  }

  render() {
    const { items, loading, error } = this.state;
    const {onSearch} = this
    return (
      <>
        <Searchbar onSubmit={ onSearch} />
        {loading && <Loader />}
        {error && <p>Будь ласка спробуйте пізніше...</p>}
        {items.length && <ImageGallery />}
      </>
    )
  }
}