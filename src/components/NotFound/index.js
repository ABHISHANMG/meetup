import './index.css'

const NotFound = () => (
  <div className="home-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
      className="not-found-image"
    />
    <h1>Page Not Found</h1>
    <p className="not-para">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
