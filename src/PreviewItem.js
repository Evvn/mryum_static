import React from 'react'

class PreviewItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      previewOpen: this.props.previewOpen
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {

  }

  render() {

    let name = this.props.name
    let price = this.props.price
    let tags = this.props.tags
    let description = this.props.description
    let style = this.props.style

    return(
      <div className='previewModal'>

        <div className="previewImage" style={ style }></div>

        <div className="previewName">{ name }</div>

        <div className="previewDescription">{ description }</div>

        <div className="previewDetails">
          <div className="previewPrice">{ price }</div>

          <div className="previewTags">{ tags }</div>
        </div>

      </div>
    )
  }
}

export default PreviewItem
