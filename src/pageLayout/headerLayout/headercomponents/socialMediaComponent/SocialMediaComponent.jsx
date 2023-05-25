import './SocialMediaComponent.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function SocialMedia() {
  return <div class="icon-container">
   <Link to="https://github.com/Domikel" target='_blank'><FontAwesomeIcon icon={['fab', 'github']} style={{ fontSize: '40px', color:"white" }}/></Link>
  </div>;
}

export default SocialMedia;
