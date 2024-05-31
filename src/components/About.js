import React from 'react';
import shopifyImage from '../components/Shopify Image.jpg'; 
import hebbar from '../components/20240228161831_IMG_0083.JPG';
import akshay from '../components/Screenshot 2024-05-28 224404.png';
import Footer from './Footer';
function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.description}>
        Welcome to our About Page! We are dedicated to providing the best service and quality content to our users.
      </p>
      <img
        src={shopifyImage}
        alt="About Us"
        style={styles.image}
      />
      <div style={styles.mission}>
        <h2 style={styles.subHeading}>Our Mission</h2>
        <p>
          Our mission is to deliver exceptional value and exceed our customers' expectations through continuous improvement and innovation.
        </p>
      </div>
      <div style={styles.team}>
        <h2 style={styles.subHeading}>Meet the Team</h2>
        <p>
          We have a team of dedicated professionals who are passionate about their work and committed to excellence.
        </p>
        <div style={styles.teamMembers}>
          <div style={styles.teamMember}>
            <img
              src={hebbar} // Placeholder image URL; replace with your own image URL
              alt="Team Member"
              style={styles.teamImage}
            />
            <p>Akshay Hebbar-CEO</p>
          </div>
          <div style={styles.teamMember}>
            <img
              src={akshay}
              alt="Team Member"
              style={styles.teamImage}
            />
            <p>Akshay Acharya - CTO</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
     
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: 'auto',
  },
  heading: {
    color: '#333',
    fontSize: '36px',
    marginBottom: '10px',
  },
  description: {
    color: '#666',
    fontSize: '18px',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  mission: {
    marginBottom: '20px',
  },
  subHeading: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '10px',
  },
  team: {
    marginBottom: '20px',
  },
  teamMembers: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  teamMember: {
    textAlign: 'center',
  },
  teamImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
};

export default About;
