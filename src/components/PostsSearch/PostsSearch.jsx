import { Component } from 'react'

import { searchPosts } from 'shared/api/api'
import Searchbar from 'components/Searchbar/Searchbar'
import Loader from 'shared/Loader/Loader'
import ImageGallery from 'components/ImageGallery/ImageGallery'
import Button from 'components/Button/Button'
import Modal from 'shared/Modal/Modal'

export default class PostsSearch extends Component {

  state = {
    items: [],
    loading: false,
    error: null,
    search: "",
    page: 1,
    modalOpen: false,
    modalContent: {
      largeImageURL: "",
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

  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1
      }  
    })
  }

  openModal = (modalContent) => {
    console.log(modalContent)
    this.setState({
      modalOpen: true,
      modalContent
    })
  }

  closeModal = () => {
    this.setState({
      modalOpen: false,
      modalContent: {
        largeImageURL: '' }
    })
  }


  render() {
    const { items, loading, error, modalOpen, modalContent } = this.state;
    const {onSearch, loadMore, openModal, closeModal} = this
    return (
      <>
        <Searchbar onSubmit={onSearch} />
        {/* {modalOpen && <Modal onClose={closeModal} modalContent={modalContent} />}
        {loading && <Loader />} */}
        {/* {error && <p>Будь ласка спробуйте пізніше...</p>} */}
        {items.length && <ImageGallery items={items} onClick={openModal} largeImageURL={modalContent.largeImageURL} />}
        {items.length && <Button onClick={loadMore} text="Load more" />}
      </>
    )
  }
}