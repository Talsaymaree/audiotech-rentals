// Equipment.js
import React, { useEffect, useState } from 'react';
import RentalList from '../components/RentalList';
import BundleList from '../components/BundleList';
import cx215 from '../images/cx215-60.png';
import k218 from '../images/klarity218.png';
import k12 from '../images/klarity12.png';
import k8 from '../images/klarity8.png';
import xdjxz from '../images/XDJ-XZ_prm_top.png'
import djm900 from '../images/djm-900nxs-main.png'
import cdj2000nx from '../images/cdj-2000nexus-main.png'
import sig12 from '../images/Sig-12-overhead-2_original.png'
import sl1200 from '../images/Technics-SL-1200MK21_600x.png'
const Equipment = () => {
  const [Equipment, setEquipment] = useState([]);
  const [bundle, setBundle] = useState([]);
  useEffect(() => {
    // Fetch Equipment data from API or mock data
    // Example mock data with image file names
    const mockBundles = [
      { 
        id: 5, 
        name: 'House', 
        description: '2x Klarity 8 <br/> + XDJ-XZ', 
        price: 450, 
      },
      { 
        id: 4, 
        name: 'Party', 
        description: '2x Klarity 8 <br/> + 2x Klarity 12',  
        price: 550, 
      },
      { 
        id: 3, 
        name: 'Bass', 
        description: '[2x Klarity 8] -OR- [2x Klarity 12] <br/> + Klarity 218', 
        price: 700 , 
      },
      { 
        id: 2, 
        name: 'Deluxe', 
        description: '2x Klarity 8 <br/> + 2x Klarity 12 <br/> + Klarity 218', 
        price: 1000, 
      },
      { 
        id: 1, 
        name: 'Max', 
        description: ' 2x Klarity 8 <br/> + 2x Klarity 12 <br/> + 2x CX215 <br/> + 2x Klarity 218', 
        price:  2000 , 
      },
    ];
    const mockEquipment = [     
       { 
        id: 1, 
        name: 'PK Sound Klarity 8', 
        description: '\n The PK Sound Klarity 8 is a \n premium-grade loudspeaker engineered to deliver exceptional sound quality and clarity in a compact and portable design. With its 8-inch woofer and high-frequency driver, the Klarity 8 produces rich and detailed audio with precision and accuracy.', 
        dimensions: '9.8x9.x18.1', 
        quantity: 2, 
        price: 30, 
        imageUrl: k8 
      },     
       { 
        id: 2, 
        name: 'PK Sound Klarity 12', 
        description: 'The PK Sound Klarity 12 is a powerful and versatile loudspeaker engineered for professional audio applications. Featuring a robust construction and advanced acoustic technology, the Klarity 12 delivers exceptional sound quality and coverage for a wide range of venues and events.', 
        dimensions: '13.4x13.9x28.5', 
        quantity: 2, 
        price: 30, 
        imageUrl: k12 
      },     
       { 
        id: 3, 
        name: 'PK Sound Klarity 218', 
        description: 'The PK Sound Klarity 218 subwoofer is designed to deliver outstanding low-frequency performance, making it perfect for situations requiring deep, impactful bass. Featuring dual 18-inch drivers and a sophisticated cabinet design, it produces powerful, clear bass. This makes it an excellent choice for both live events and immersive audio experiences.', 
        dimensions: '30.1x38.9x23.1', 
        quantity: 2, 
        price: 50, 
        imageUrl: k218 
      },
      { 
        id: 4, 
        name: 'PK Sound CX215', 
        description: 'the PK Sound Klarity CX215 delivers powerful, high-fidelity sound reproduction with robust construction and versatile features, making it an ideal choice for professional live sound reinforcement.', 
        dimensions: '20x17.7x28.3', 
        quantity: 2, 
        price: 20, 
        imageUrl: cx215 
      },


      { 
        id: 5, 
        name: 'Pioneer XDJ-XZ', 
        description: 'The XDJ-XZ is a professional all-in-one DJ system that’s perfect for events, a bar or club, or your private studio. Wherever you take it, the XDJ-XZ gives you all the features you need to get the job done. This 4-channel system features a professional layout – so you’ll feel exactly like you’re using our club-standard NXS2 setup.', 
        dimensions: '', 
        quantity: 1, 
        price: 30, 
        imageUrl: xdjxz 
      },
      { 
        id: 6, 
        name: 'CDJ 2000 Nexus', 
        description: '\n The CDJ-2000 Nexus is a versatile and reliable digital media player that has become a staple in the professional DJ industry, offering advanced features and seamless integration for modern DJ performances.', 
        dimensions: '', 
        quantity: 2, 
        price: 30, 
        imageUrl: cdj2000nx 
      },
      { 
        id: 7, 
        name: 'DJM 900 Nexus', 
        description: '\n the DJM-900 Nexus is a powerful and versatile mixer that is well-suited for professional DJs and clubs, offering a comprehensive set of features and exceptional audio quality for demanding live performances and studio use.', 
        dimensions: '', 
        quantity: 2, 
        price: 30, 
        imageUrl: djm900 
      },
      { 
        id: 8, 
        name: 'Soundcraft Signature 12', 
        description: '\n The SoundCraft Signature 12 is a compact analog mixer designed for a range of audio applications, from live sound reinforcement to studio recording. Overall, the SoundCraft Signature 12 is valued for its combination of professional features, sound quality, and compact design, making it suitable for a wide range of audio mixing applications.', 
        dimensions: '', 
        quantity: 2, 
        price: 30, 
        imageUrl: sig12 
      },
      { 
        id: 9, 
        name: 'Technics SL1200-MK2', 
        description: '\n Introduced in 1972, the \n </br> Technics SL-</br>1200 direct drive turntable line was originally designed for HiFi listening. The turntables were adopted by DJs due to their strong motors, tonearm tracking and durability.', 
        dimensions: '', 
        quantity: 2, 
        price: 30, 
        imageUrl: sl1200 
      }
    ];
    document.title ="Audio Equipment for Rent - AudioTech Rentals"; 
    document.getElementsByTagName("META")[2].content="Explore our premium club ready audio equipment for rent, including speakers, mixers, turntables, and more. Elevate your event with top-quality sound solutions. Contact us now!";
    setEquipment(mockEquipment);
    setBundle(mockBundles);
  }, []);

  return (
    <div >
      <div className={'mx-auto my-0 prose md:prose-md text-left 2xl:max-w-screen-lg max-h-screen-lg mx-auto text-1xl'}>
      <h3>Bundles:</h3>
      </div>
      <BundleList bundle={bundle} />
      <p className={'2xl:max-w-screen-lg max-h-screen-lg mx-auto text-sm'}>All the equipment listed below is available as an addon and can be rented seprately.</p>
      <p className={'2xl:max-w-screen-lg max-h-screen-lg mx-auto text-sm'}>A free Microphone will be provided as needed.</p>
      <br/>
      <div className={'mx-auto my-0 prose md:prose-md text-left 2xl:max-w-screen-lg max-h-screen-lg mx-auto text-1xl'}>
      <h3>Equipment:</h3>
      </div>
      <RentalList Equipment={Equipment} />
    </div>
  );
}

export default Equipment;
