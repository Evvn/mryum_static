import React from 'react'

class MenuItem extends React.Component {

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
          <div className="menuItem">

            <div
              className="leftBox"
              style = { style }
              >
            </div>

            <div className="rightBox">
              <h3 className="title">{ name }</h3>

              <p className="bodyText">{ description }</p>

              <div className="info">
                <span className="price">{ price }</span>
                <span className="tags">{ tags }</span>
              </div>
            </div>

          </div>
        :
          <div className="menuItem">

            <div
              className="rightBox"
              style = { style }
              >
            </div>

            <div className="leftBox">
              <h3 className="title">{ name }</h3>

              <p className="bodyText">{ description }</p>

              <div className="info">
                <span className="price">{ price }</span>
                <span className="tags">{ tags }</span>
              </div>
            </div>

          </div>
        }
      </div>
    )
  }
}

export default MenuItem;
