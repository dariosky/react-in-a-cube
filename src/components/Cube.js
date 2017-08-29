import React from 'react'


class Cube extends React.Component {
  render() {
    const text = this.props.text
    return <div style={{
      margin: '40px',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div className="stage">
        <div className="cube">
          <figure className="front">{text}</figure>
          <figure className="back">{text}</figure>
          <figure className="right">{text}</figure>
          <figure className="left">{text}</figure>
          <figure className="top">{text}</figure>
          <figure className="bottom">{text}</figure>
        </div>
      </div>
    </div>
  }
}

export default Cube
