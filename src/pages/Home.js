// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TeamBar from '../components/Teambar';
import Feed from '../components/Feed';
import '../style/homepage.css'; // CSS for page layout

const Home = () => (
  <div>
    <Navbar />
    <div className="home-main">
      <Sidebar />
      <main className="main-feed">
        <Feed />
      </main>
      <TeamBar />
    </div>
  </div>
);

export default Home;
