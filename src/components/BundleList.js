// BundleList.js
import React from 'react';
import BundleItem from './BundleItem';

const BundleList = ({ bundle }) => {
  return (
    <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-screen-lg max-h-screen-4xl mx-auto"}>
      {bundle.map(bundle => (
        <BundleItem key={bundle.id} bundle={bundle} />
      ))}
    </div>
  );
}

export default BundleList;
