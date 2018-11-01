import React from 'react'
import PreviewItem from './PreviewItem.js'

class MenuItem extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      previewOpen: false,
      id: null
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    let id = e.target.id

    this.setState(
      {
        previewOpen: !this.state.previewOpen,
        id: id
      }, () => {
        console.log(this.state.id);
        console.log(this.state.previewOpen);
        document.body.classList.toggle('lockScroll')
      })
  }

  closePreview(e) {

    console.log('close preview pls');
  }

  render() {

    let id = this.props.id
    let name = this.props.name
    let price = this.props.price
    let tags = this.props.tags
    let image = this.props.image
    let description = this.props.description
    let style = {
      backgroundImage: 'url(' + image + ')',
      backgroundSize: 'cover'
    }

    return(
      <div>
        {/* if menu item is even or odd, for alternating cards */}
        { id % 2 === 0 ?
          <div
            className="menuItem"
            onClick={ this.handleClick }
            id={ id }
            >

            <div
              className="leftBox"
              style = { style }
              id={ id }
              >
            </div>

            <div className="rightBox" id={ id }>
              <h3 className="title" id={ id }>{ name }</h3>

              <p className="bodyText" id={ id }>{ description }</p>

              <div className="info" id={ id }>
                <span className="price" id={ id }>{ price }</span>
                <span className="tags" id={ id }>{ tags }</span>
              </div>
            </div>

            { this.state.previewOpen ?
              <PreviewItem
                previewOpen = { this.state.previewOpen }
                id = { this.state.id }
                name = { name }
                price = { price }
                tags = { tags }
                image = { image }
                description = { description }
                style = { style }
              />
            :
              null
            }

          </div>
        :
          <div
            className="menuItem"
            onClick={ this.handleClick }
            id={ id }
            >

            <div
              className="rightBox"
              style = { style }
              id={ id }
              >
            </div>

            <div className="leftBox" id={ id }>
              <h3 className="title" id={ id }>{ name }</h3>

              <p className="bodyText" id={ id }>{ description }</p>

              <div className="info" id={ id }>
                <span className="price" id={ id }>{ price }</span>
                <span className="tags" id={ id }>{ tags }</span>
              </div>
            </div>

            { this.state.previewOpen ?
              <PreviewItem
                previewOpen = { this.state.previewOpen }
                id = { this.state.id }
                name = { name }
                price = { price }
                tags = { tags }
                image = { image }
                description = { description }
                style = { style }
              />
            :
              null
            }

          </div>
        }
      </div>
    )
  }
}

export default MenuItem;
