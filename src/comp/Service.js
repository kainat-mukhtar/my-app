import React from 'react'

const Service = () => {
    return (
        <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Services</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <i className="fa-solid fa-code"></i>
            </div>
            <h3 className="fs-2 text-body-emphasis">Web Development</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              
            </div>
            <h3 className="fs-2 text-body-emphasis">Graphic Designing </h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
           
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
             
            </div>
            <h3 className="fs-2 text-body-emphasis">Database Management</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            
          </div>
        </div>
      </div>
    )
}

export default Service