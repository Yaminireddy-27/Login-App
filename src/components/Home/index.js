// Write your code here
import {Component} from 'react'
import Login from '.loginApp/src/components/Login'

class Home extends Component {
  state = {isLoggedIn: true}

  render() {
    const {isLoggedIn} = this.state
    return (
      <div>
        <div>
          <Message isLoggedIn={this.state} />
          <Login />
          <Logout />
        </div>
      </div>
    )
  }
}

export default Home
