import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  Increment = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prev => ({speed: prev.speed + 10}))
    }
  }

  Decrement = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prev => ({speed: prev.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedometer"
          />
          <h1 className="speed">{`Speed is ${speed}mph`}</h1>
          <p className="note">Min Limit is 0mph,Max Limit is 200mph</p>
          <div className="btn-container">
            <button className="button" onClick = {this.Increment}>Accelrate</button>
            <button className="button-1 button" onClick = {this.Decrement}>Apply Brakes</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
