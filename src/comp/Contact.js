import React from 'react'

const Contact = () => {
    return (
        <div class="row g-3">
        <div class="col">
          <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
        </div>
      </div>
    )
}
export default Contact