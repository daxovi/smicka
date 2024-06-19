import React from 'react'
import MDReader from '../components/MDReader'

const Reference = () => {
  return (
    <div className="">
    <MDReader file="ref-intro.md" />
    <div className="ref">
    <MDReader file="ref.md" />
    </div>
    </div>
  )
}

export default Reference