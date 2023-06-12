import React from 'react'

function Create() {
  return (
    <div>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="email" class="form-control"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="password" class="form-control"/>
  </div>
  <div class="mb-3">
    
    <label class="form-check-label" for="exampleCheck1">age</label>
    <input type="checkbox" class="form-check-input"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Create