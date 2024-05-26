import React from 'react';
import './ResourceCard.css';

const ResourceCard = ({ resource }) => (
  <div className="card-container">
    <div className='card'>
      <img className="img" src={resource.icon_url} alt='logo' />
      <h3 className='card-title'>{resource.title}</h3>
      <span className='card-subtitle'>{resource.category}</span>
      <p className='card-description'>{resource.description}</p>
      <a href={resource.link}className='card-link'>{resource.link}</a>
      <div className="resource-tags">{resource.tag_name}</div>
    </div>
  </div>
);

export default ResourceCard;
