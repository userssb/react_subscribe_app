import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onSubscribe = () => {
    this.setState(prevstate => ({isSubscribed: !prevstate.isSubscribed}))
  }

  buttonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'subscribe'
  }

  render() {
    const buttonText = this.buttonText()
    return (
      <div className="bg-cont">
        <div className="welcome-cont">
          <h1 className="heading">Welcome</h1>
          <p className="text">Thank you! Happy Learning</p>
          <div className="but-cont">
            <button className="button" type="button" onClick={this.onSubscribe}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Welcome
