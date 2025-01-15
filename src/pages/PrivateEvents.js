// PrivateEvents.js
import React, { useEffect, useState } from 'react';
import BundleList from '../components/BundleList';

const PrivateEvents = () => {
  const [bundle, setBundle] = useState([]);
  useEffect(() => {
    // Fetch rentals data from API or mock data
    // Example mock data with image file names
    const mockBundles = [
      { 
        id: 1, 
        name: 'Basic', 
        description: 'Basic Sound system good for up to 90 guests + up to 6 hours DJ',  
        price: 800, 
      },
      { 
        id: 2, 
        name: 'Plus', 
        description: 'Medium Sound system good for up to 150 guests + up to 6 hours DJ + requests app', 
        price: 1200 , 
      },
      { 
        id: 3, 
        name: 'Full', 
        description: 'Full sound system with the addition of a sub bass good for up to 250 guests + up to 6 hours + requests app ', 
        price: 2200, 
      },
      { 
        id: 4, 
        name: 'Ultra', 
        description: 'Ultra sound system and two sub basses is good for up to 400 guests + up to 6 hours + requests app ',  
        price: 3200, 
      },
    ];
    setBundle(mockBundles);
    document.title ="Events - AudioTech Rentals"; 
    document.getElementsByTagName("META")[2].content="Unforgettable Events Begin with Unmatched Sound - AudioTech Rentals Delivers the Perfect Blend of Audio Excellence and DJ Expertise!";
  }, []);

  return (
    <div >
      <div className={'mx-auto my-0 prose md:prose-md text-left 2xl:max-w-screen-lg max-h-screen-lg mx-auto text-1xl'}>
      <h3>Are you planning an event that needs the perfect soundtrack?</h3>
      <p className={"whitespace-pre-line"}>
      Look no further! AudioTech Rentals is here to make your special event unforgettable
      <br/> with our <a href='/equipment'>premium club-ready audio equipment</a> and professional <a href='/dj'>DJ services</a>.
      <br/>   <br/>
      🎉 Private Parties<br/>
      🎂 Birthdays<br/>
      🥂 Corporate Events<br/>
      💍 Weddings<br/>

      <br/>
      </p>
      <h3>Packages:</h3>
      </div>
      <BundleList bundle={bundle} />
    </div>
  );
}

export default PrivateEvents;
