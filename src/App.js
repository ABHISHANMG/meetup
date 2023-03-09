import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import './App.css'

import LoginContext from './context'

import Home from './components/Home'

import Login from './components/Login'

import NotFound from './components/NotFound'

class App extends Component {
  state = {
    username: '',
    topic: '',
    errorMessage: '',
    isInvalid: false,
    meetPage: false,
  }

  changeName = username => {
    this.setState({username})
  }

  changeTopic = topicName => {
    this.setState({topic: topicName})
  }

  submitForm = event => {
    event.preventDefault()
    const {username} = this.state
    if (username === '') {
      this.setState({isInvalid: true})
    } else {
      this.setState({isInvalid: false, meetPage: true})
    }
  }

  render() {
    const {errorMessage, isInvalid, username, topic, meetPage} = this.state

    return (
      <LoginContext.Provider
        value={{
          username,
          topic,
          errorMessage,
          isInvalid,
          meetPage,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          submitForm: this.submitForm,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Login} />
          <NotFound />
        </Switch>
      </LoginContext.Provider>
    )
  }
}
export default App
