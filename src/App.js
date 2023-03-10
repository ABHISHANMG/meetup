import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import './App.css'

import LoginContext from './context'

import Home from './components/Home'

import Login from './components/Login'

import NotFound from './components/NotFound'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {
    username: '',
    topic: topicsList[0].displayText,
    errorMessage: 'Please enter your name',
    isInvalid: false,
    meetPage: false,
  }

  changeName = event => {
    this.setState({username: event})
  }

  changeTopic = event => {
    this.setState({topic: event})
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
