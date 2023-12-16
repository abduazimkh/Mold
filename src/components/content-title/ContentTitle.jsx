import React from 'react';
import c from './ContentTitle.module.css';

const ContentTitle = ({title}) => {
  return (
    <div className={c.contentTitle}>
        <h1>{title}</h1>
    </div>
  )
}

export default ContentTitle
