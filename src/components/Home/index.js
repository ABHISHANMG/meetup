import {Component} from 'react'

import {Link} from 'react-router-dom'

import Header from '../Header'

import LoginContext from '../../context/index'

import './index.css'

class Home extends Component {
  render() {
    return (
      <LoginContext.Consumer>
        {value => {
          const {username, topic, meetPage} = value
          return (
            <>
              <Header />
              {!meetPage ? (
                <div className="home-container">
                  <h1 className="heading">Welcome to meetup</h1>
                  <p className="para">Please register for the topic</p>
                  <Link to="/register">
                    <button className="btn" type="button">
                      Register
                    </button>
                  </Link>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                    className="meet-image"
                  />
                </div>
              ) : (
                <div className="home-container">
                  <h1 className="heading-regi">Hello {username}</h1>
                  <p className="para-regi">Welcome to {topic}</p>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                    className="meet-image"
                  />
                </div>
              )}
            </>
          )
        }}
      </LoginContext.Consumer>
    )
  }
}
export default Home
