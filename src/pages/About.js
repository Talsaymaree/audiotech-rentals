// About.js
import React from 'react';


const About = () => {
  document.title ="About - AudioTech Rentals"; 
  document.getElementsByTagName("META")[2].content="Discover the Power of Perfect Sound with AudioTech – Your Premier Destination for High-Quality Audio Equipment Rentals and Professional DJ Services. Learn More About Our Commitment to Excellence and Elevate Your Event Experience Today!";
  return (
    <div className={"mx-auto my-0 prose md:prose-md text-left 2xl:max-w-screen-lg max-h-screen-lg mx-auto text-md"}>
      <section className="text-md">
      <h3>About</h3>
      <p>AudioTech Rentals is commmited to elevate the audio experience for gatherings of all sizes. With years of experience in the industry, our team brings a wealth of expertise to your event.</p>
    </section>
    <section>
      <p>From premium club-ready sound solutions to skilled DJs who know how to get the party started, we have everything you need to make your event unforgettable.</p>
      {/* <ul>
        <li>Quality Assurance: We pride ourselves on offering the highest quality audio equipment, ensuring crystal-clear sound and unmatched performance.</li>
        <li>Expertise: Our team of experienced professionals have the knowledge and skill to handle any event, from intimate gatherings to large-scale productions.</li>
        <li>Customer Satisfaction: Your satisfaction is our top priority. We go above and beyond to ensure that every aspect of your audio experience exceeds your expectations.</li>
      </ul> */}
    </section>
    <section>

    </section>
      {/* <p className="about-description">Our mission is to make high-quality audio equipment accessible to everyone at affordable prices.</p> */}
      <div className="google-map-code">
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1478315.3004042308!2d-80.52835!3d43.641207!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1714044348372!5m2!1sen!2sca" 
      height="550" 
      className={"mx-auto my-5 w-full"}
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"/>
        </div>
    </div>
  );
}

export default About;
