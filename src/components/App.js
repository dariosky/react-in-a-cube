import React, {Component} from 'react'
import '../App.css'
import Cube from './Cube'

const inputStyle = {
  padding: '5px 10px',
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: "Hello world in a frame",
    }
  }

  onChangeText = (e) => {
    const text = e.target.value
    this.setState({
      text,
    })
  }

  render() {
    const text = this.state.text
    return (
      <div className="App">
        <div className="App-header">
          <h2>Text in a <span className="striked">box</span> cube</h2>
        </div>
        <div>
          <input type="text" value={text} style={inputStyle} onChange={this.onChangeText}/>
        </div>

        <Cube text={text}/>
        <div>
          An experiment with React and CSS transforms
        </div>
      </div>
    )
  }
}

export default App
