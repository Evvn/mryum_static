import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = { menuOpen: false }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState(state => ({
      menuOpen: !state.menuOpen
    }))
    document.body.classList.toggle('lockScroll')
  }

  sections() {
    let sections = this.props.sections
    let sectionsList = []

    for (let i = 0; i < sections.length; i++) {
      sectionsList.push(
        <AnchorLink
        href={`#` + i}
        onClick={ this.handleClick }
        key={ i }
        >
          <li>{ sections[i].name }</li>
        </AnchorLink>
      )
    }

    return sectionsList
  }

  render() {

    let name = this.props.name
    let hamburgerClass = "hamburger hamburger--collapse"
    // let sections = this.props.sections

    return(
      <div>
        <header
          className={ this.state.menuOpen ? 'menuOpen' : null }
          >

          <div className="placeholder"></div>

          <h1
            className={ this.state.menuOpen ? 'venue hidden'  : 'venue' }
            >
              { name }
          </h1>

          <div className="placeholder"></div>

          <div
            className={ this.state.menuOpen ? hamburgerClass + ' is-active' : hamburgerClass }
            onClick={ this.handleClick }>
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>

        </header>

        { this.state.menuOpen ?
          <div className="linksWrapper">
            <ul className="links">

              <li><img src="/Mr_Yum_logo_white.svg" alt="Mr Yum"/></li>

              { this.sections() }

            </ul>
          </div>
          :
          null
        }
      </div>
    )
  }
}

export default Header;
