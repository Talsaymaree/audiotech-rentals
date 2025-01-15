// Home.js
import React from 'react';

const Home = () => {
  document.title ="Home - AudioTech Rentals"; 
  document.getElementsByTagName("META")[2].content="Are you planning an event that needs the perfect soundtrack? Look no further! AudioTech Rentals is here to make your special event unforgettable with our premium club ready audio equipment and professional DJ services. Every Beat, Every Note, Every Moment – Tailored to Perfection!";
  return (
    <div  >
      <div className={"mx-auto my-10 prose md:prose-md text-left 2xl:max-w-screen-2xl max-h-screen-xl mx-auto lg:text-2xl text-white sm:text-xs"}>
      <div className={"h-5/6 -my-10	 bg-[url('./images/hero.jpg')] bg-cover bg-blend-color-burn bg-no-repeat	bg-center bg-red-900/80 lg:p-24 sm:p-12 my-10"}>
      {/* <h2 className={'text-white p-2'}>Every Beat, Every Note, Every Moment - Tailored to Perfection!</h2> */}
      <p className={"whitespace-pre-line sm:p-2"}>
      Ready to elevate your audio? 🎉
      <br/>
      Book now and get a 10% discount on your first quote! 🌟
      </p>
      {/* <Contact/> */}
      </div>
      {/* <div className="google-map-code">
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d369970.0632821224!2d-79.58901852501126!3d43.577569!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1714043517161!5m2!1sen!2sca" 
      height="350" 
      className={"mx-auto w-11/12"}
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"/>
        </div> */}
        </div>
        <h3 className='text-center text-sm'>Operating in The Greater Toronto Area since 2023</h3>
    </div>
    
  );
}

export default Home;
