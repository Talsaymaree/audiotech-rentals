// Dj.js
import React from 'react';

const Dj = () => {
  document.title ="DJ Service - AudioTech Rentals"; 
  document.getElementsByTagName("META")[2].content="Elevate Your Event with Our Premier DJ Service – Where Every Beat Counts and Every Moment Shines, Tailored to Your Unique Style and Vision!";
  return (
    <div className={"mx-auto my-0 prose md:prose-md text-left 2xl:max-w-screen-lg max-h-screen-lg mx-auto text-1xl"}>
      <h3>DJ Service</h3>
      <div className={'mx-10 text-sm'}>
      <p>      At ATR, we're passionate about creating memorable moments that last a lifetime. Get in touch with us today to discuss how we can elevate your event to new heights!
      <ul> 
        <li><h4 className={'font-bold'}>Experienced DJs:</h4> Whether you prefer the classics, chart-toppers or ambience, our roster is versed in a wide range of musical backgrounds.</li>
        <li><h4 className={'font-bold'}>Premium Club-Ready Audio:</h4> We pride ourselves on using club approved audio that will provide crystal-clear sound quality that can fill wedding halls, gallery spaces or museums.</li>
        <li><h4 className={'font-bold'}>Interactive Playlist Experience:</h4>Our service goes beyond the ordinary by providing a tailored playlist experience and can adapt on the fly to keep your guests entertained.</li>
      </ul>
</p>
      </div>
    </div>
  );
}

export default Dj;
