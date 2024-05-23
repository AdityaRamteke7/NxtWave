import React from 'react';
import './ResourceCard.css';

const ResourceCard = ({ resource }) => (
  <div className="resource-card">
    <h3 className='center'>{resource.title}</h3>
    <p className='description'>{resource.description}</p>
    <div className="resource-tags">{resource.tag_name}</div>
  </div>
);

export default ResourceCard;
