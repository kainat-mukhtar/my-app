import React from 'react'
// import Header from './inc/Header'
// import Footer from './inc/Footer'
// import Account from './Account'

const About = () => {
    return (
        <div className='container col-xxl-8 px-4 py-5'>
 <div className="row flex-sm-row-reverse align-items-center g-5 py-5">
        <div className="col-5 col-sm-8 col-lg-6 mx-auto">
        <img src='https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='aboutimage' className='rounded-circle shadow'></img>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About Us</h1>
          <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contatc Me</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Hire Me</button>
          </div>
        </div>
      </div>
        </div>
       
    )
}

export default About