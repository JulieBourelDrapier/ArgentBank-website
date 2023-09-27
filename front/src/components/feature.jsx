import React from "react";
import '../style.css';

function Feature({img, title, desc}) {
  return (
    <div className="feature-item">
      <img src={img.src} alt={img.alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default Feature;


