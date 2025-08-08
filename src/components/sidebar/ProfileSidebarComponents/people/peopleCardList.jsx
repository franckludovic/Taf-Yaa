import React from 'react';
import '../../../../styles/peopleCard.css';
import PeopleCard from './peopleCard';


function PeopleCardList({
  people = [],
  stacked = people.length > 1,
  onPersonClick = () => {},
}) {
  return (
    <div className={`people-list ${stacked ? 'stacked' : ''}`}>
      {people.map((person, i) => (
        <PeopleCard
          key={person.id || i}
          image={person.image}
          name={person.name}
          onClick={() => onPersonClick(person)}
        />
      ))}
    </div>
  );
}

export default PeopleCardList;

