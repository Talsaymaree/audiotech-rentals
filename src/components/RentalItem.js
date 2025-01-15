// RentalItem.js
import React, { useState } from 'react';import ImagePopup from './ImagePopup';

const RentalItem = ({ item, imageUrl }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className={"border border-gray-300 rounded-md p-4 mb-1 cursor-pointer "} onClick={handleZoomToggle}>

    <div className={'w-full h-2/5 z-20'} >     
     
        <img 
        src={item.imageUrl} 
        alt={item.name} 
        className={'w-full h-max object-contain}'}/>
      </div>
      {isZoomed && (
          <ImagePopup
            imageUrl={item.imageUrl}
            onClose={handleZoomToggle}
            
          />
        )}
      {/* {isZoomed && <ImagePopup imageUrl={item.imageUrl} onClose={handleZoomToggle} />}    */}
      <br/>
      <br/>
      <div className={'max-h-screen max-w-screen my-1'}>
        {/* <br></br> */}
      <h4>{item.name}</h4>
      {/* <p className={'text-xs '}>{item.description}</p>      
      <br/>     */}
      {/* <p className={'text-xs '}>Dimensions: {item.dimensions}</p>
      <p className={'text-xs '}>Quantity: {item.quantity}</p> */}
      {/* <p className={'text-xs '} dangerouslySetInnerHTML={{ __html: item.description }} /> */}
       </div>

    </div>
  );
}

export default RentalItem;
