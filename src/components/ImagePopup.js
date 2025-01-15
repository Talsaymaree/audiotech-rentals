// ImagePopup.js
import React from 'react';

const ImagePopup = ({ imageUrl, onClose }) => {
  return (
    <div className={'fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50'} onClick={onClose}>
      <div className={"max-h-screen max-w-screen"}>
        <img src={imageUrl} alt="Zoomed Image" className={"max-w-screen max-h-screen block mx-auto"} />
      </div>
    </div>
  );
}

export default ImagePopup;
