import React, { Component } from 'react'
import PDF from 'react-pdf-js'

class Loader extends Component {
  render () {
    return (
      <div className='spinner-container'>
        <div className='spinner-circle'>
          <div className='spinner-circle1 spinner-child' />
          <div className='spinner-circle2 spinner-child' />
          <div className='spinner-circle3 spinner-child' />
          <div className='spinner-circle4 spinner-child' />
          <div className='spinner-circle5 spinner-child' />
          <div className='spinner-circle6 spinner-child' />
          <div className='spinner-circle7 spinner-child' />
          <div className='spinner-circle8 spinner-child' />
          <div className='spinner-circle9 spinner-child' />
          <div className='spinner-circle10 spinner-child' />
          <div className='spinner-circle11 spinner-child' />
          <div className='spinner-circle12 spinner-child' />
        </div>
      </div>
    )
  }
}

export default class PdfViewer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  componentWillReceiveProps () {
    this.setState({
      loading: true
    })
  }

  onDocumentComplete = (pages) => {
    this.setState({
      loading: false,
      page: 1,
      pages
    })
  }

  onPageComplete = (page) => {
    this.setState({ page })
  }

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 })
  }

  handleNext = () => {
    this.setState({ page: this.state.page + 1 })
  }

  renderPagination = (page, pages) => {
    let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>
    if (page === 1) {
      previousButton = <li className="previous disabled"><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>
    }
    let nextButton = <li className="next" onClick={this.handleNext}><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>
    if (page === pages) {
      nextButton = <li className="next disabled"><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>
    }
  }

  render () {
    let pagination = null
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages)
    }
    return (
      <div>
        {this.state.loading &&
          <div className='loader-container'>
            <Loader />
          </div>
        }
        <PDF
          fullWidth
          file={`//s3.amazonaws.com/forosvecinales/visualizador/${this.props.archivo}_${this.props.barrio}_${this.props.anio}.pdf`}
          onDocumentComplete={this.onDocumentComplete}
          onPageComplete={this.onPageComplete}
          page={this.state.page}
          loading={<Loader />}
        />
        {pagination}
      </div>
    )
  }
}
