import React from 'react'

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4">Welcome to the Home Page</h1>
        <p className="lead mt-3">This is a simple homepage built using React and Bootstrap.</p>
        <hr className="my-4" />
        <p>Use the navigation bar to explore different sections.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
    </div>
  )
}

export default Home