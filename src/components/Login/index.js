import {Component} from 'react'

import Header from '../Header'

import LoginContext from '../../context/index'

import './index.css'

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

const Login = props => (
  <LoginContext.Consumer>
    {value => {
      const {
        errorMessage,
        isInvalid,
        username,
        topic,
        meetPage,
        changeName,
        changeTopic,
        submitForm,
      } = value

      const usernameChange = event => {
        changeName(event.target.value)
      }

      const topicChange = event => {
        changeTopic(event.target.value)
      }

      const onSubmitForm = event => {
        submitForm(event)
        const {history} = props
        history.replace('/')
      }

      return (
        <>
          <Header />
          <div className="register-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <div className="form-container">
              <h1 className="heading">Let us join</h1>
              <form onSubmit={onSubmitForm}>
                <label htmlFor="name">NAME</label>
                <br />
                <input
                  id="name"
                  className="input"
                  placeholder="Your name"
                  onChange={usernameChange}
                />
                <br />
                <label htmlFor="Topics">TOPICS</label>
                <br />
                <select className="input" onChange={topicChange}>
                  {topicsList.map(eachItem => (
                    <option value={eachItem.id} id={eachItem.id}>
                      {eachItem.displayText}
                    </option>
                  ))}
                </select>
                <button className="btn-register" type="submit">
                  Register Now
                </button>
                {isInvalid && <p>{errorMessage}</p>}
              </form>
            </div>
          </div>
        </>
      )
    }}
  </LoginContext.Consumer>
)

export default Login
