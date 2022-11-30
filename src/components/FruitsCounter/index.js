// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananaCount: 0}

  onMangoClick = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  onBananaClick = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoesCount, bananaCount} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          Bob ate <span className="count">{mangoesCount}</span> mangoes
          <span className="count"> {bananaCount}</span> bananas
        </h1>
        <div className="bg-container">
          <div className="mango-container">
            <img
              className="fruit-image"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <button
              className="button-mango"
              type="button"
              onClick={this.onMangoClick}
            >
              Eat Mango
            </button>
          </div>
          <div className="mango-container">
            <img
              className="fruit-image"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
            <button
              className="button-mango"
              type="button"
              onClick={this.onBananaClick}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
