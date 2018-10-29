import React from 'react'

class Header extends React.Component {

  render() {

    let name = this.props.name

    return(
      <header>
        <div className="placeholder"></div>
        <h1 className="venue">{ name }</h1>
        <div className="menu">menu</div>
      </header>
    )
  }
}

export default Header;
