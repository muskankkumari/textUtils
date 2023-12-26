import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  let myStyle={
    color:'white',
    backgroundColor: 'black',
    };
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={myStyle}>
  <div className="container-fluid" style={myStyle}>
    <a className="navbar-brand" href="/"style={myStyle}>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"style={myStyle}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"style={myStyle}>{props.aboutus}</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.prototypes = {
  title: PropTypes.string.isRequired,
  aboutus: PropTypes.string
}
Navbar.defaultProps ={
  title: "Let's go",
  aboutus: "No way!"
}