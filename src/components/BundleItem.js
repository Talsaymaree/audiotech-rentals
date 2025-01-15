// BundleItem.js
import React, { useState } from 'react';import ImagePopup from './ImagePopup';

const BundleItem = ({ bundle, imageUrl }) => {

  return (
    <div className={"border border-gray-300 rounded-md p-2 mb-2 "}>

    <div className={'w-full h-2/5 z-20 prose md:prose-sm'} >     
      <br/>
      <div className={'max-h-screen max-w-screen -my-6 '}>
      <h3>{bundle.name}</h3>      
      <h4 className={'text-xs font-bold'}>Price: ${bundle.price} per day</h4>
      <p className={'text-xs leading-snug line-clamp-7'} dangerouslySetInnerHTML={{ __html: bundle.description }}></p>    
      <div></div>   

      <br></br>
       </div>

    </div>
    </div>
  );
}

export default BundleItem;
