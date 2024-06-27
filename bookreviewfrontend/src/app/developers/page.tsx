import React from 'react'
import DeveloperCard from './DeveloperCard';
import { developers } from './data';
import "./page.css"
const page = () => {
  return (
    <div className="apppage">
    <h1>Developer Profiles</h1>
    <div className="developer-list">
      {developers.map((developer, index) => (
        <DeveloperCard key={index} developer={developer} />
      ))}
    </div>
  </div>
  )
}

export default page
