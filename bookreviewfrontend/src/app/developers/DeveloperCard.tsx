// src/DeveloperCard.js
import React from 'react';
import './DeveloperCard.css';

const DeveloperCard = ({ developer }:any) => {
  return (
    <div className="developer-card">
      <img src={developer.image} alt={`${developer.name}'s avatar`} className="developer-image" />
      <h2>{developer.name}</h2>
      <div className="developer-links">
        <a href={developer.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={developer.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default DeveloperCard;
