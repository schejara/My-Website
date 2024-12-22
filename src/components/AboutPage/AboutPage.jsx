import React from 'react';
import './AboutPage.css'; // Make sure to create and import the CSS file

function AboutPage() {
  return (
    <div className="container">
      <h1 className='family'>Personal Insights</h1>
      <div className="section">
        <div className="text">
          <p className='about'>
            I am happily married to my wonderful husband, who works as a IT Senior Manager.
            We share a strong bond built on trust, support, and a love for spending time together. Although 
            our lives can be busy, we always make an effort to stay connected, whether through simple conversations 
            or enjoying activities we both love. Our partnership is a foundation that keeps us grounded, 
            and we continue to grow and navigate life as a team.
          </p>
        </div>
        <img src='/Couple.jpg' alt="Couple" className="image" />

      </div>
      <div className="section">
        <div className="text">
          <p className='about'>
            I am a proud mother of two amazing kids who bring so much joy and energy into our home.
            Watching them grow, learn, and develop their unique personalities is truly one of the most 
            rewarding experiences of my life. While life can get hectic, I always prioritize creating special 
            moments with them, whether it’s through family activities or just everyday bonding. They are 
            my greatest source of happiness and inspiration, and I cherish every moment with them.
          </p>
        </div>
        <img src='/Kids.jpg' alt="Kids" className="image" />
      </div>
      <div className="section">
        <div className="text">
          <p className='about'>
            In my personal time, I enjoy playing pickleball, which has become a fun and energetic way to stay active 
            and socialize. It’s a great way to unwind and enjoy some friendly competition. I also love to explore new 
            interests and hobbies that bring balance to my life. Whether it's spending time with my family, playing 
            sports, or watching a good movie with my family, I value these moments of relaxation and connection.
          </p>
        </div>
        <img src='/PickleBall.jpg' alt="Pickleball" className="image" />
      </div>
    </div>
  );
}

export default AboutPage;
