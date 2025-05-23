import React from 'react';
import NavBar from '../components/navbar/NavBar';
import PrivacyPolicy from '../components/privacy-policy/PrivacyPolicy';
import './Home.css'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <PrivacyPolicy/>
    </div>
  )
}

export default Home