import React from 'react'
import {Link} from "react-router-dom"

const Default = () => {
  return (
    <div className="default">
      <h1>Nothing to see here!</h1>
      <Link to="/">Back to main <br /><i className="fas fa-undo"></i> </Link>
    </div>
  )
}

export default Default
