// RentalList.js
import React from 'react';
import RentalItem from './RentalItem';

const RentalList = ({ Equipment }) => {
  return (
    <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-screen-lg max-h-screen-lg mx-auto"}>
      {Equipment.map(item => (
        <RentalItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default RentalList;
