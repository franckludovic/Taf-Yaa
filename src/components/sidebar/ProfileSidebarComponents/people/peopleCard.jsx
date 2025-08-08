import React from 'react';
import '../../../../styles/peopleCard.css';


function PeopleCard({
  image,
  name,
  alt = '',
  onClick = null,
  tooltip = name,
  className = '',
}) {
  return (
    <div
      className={`people-card ${className}`}
      title={tooltip}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <img src={image} alt={alt || name} loading="lazy" />
    </div>
  );
}

export default PeopleCard;

