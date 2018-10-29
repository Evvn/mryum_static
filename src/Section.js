import React from 'react'

class Section extends React.Component {

  render() {

    let name = this.props.name

    return(
      <h2 className="section">{ name }</h2>
    )
  }
}

export default Section;
