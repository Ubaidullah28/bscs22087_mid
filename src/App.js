import {React, useState} from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ListingsGrid from './Components/ListingGrid';

function App() {
  return (
    <div>S
      <Navbar />
      <section id="home" style={{ height: '100vh', backgroundColor: '#f4f4f4' }}>
        <h1>Movies List</h1>
      </section>
      <section id="about" style={{ height: '100vh', backgroundColor: '#e2e2e2' }}>
        <h1>About Section</h1>
     </section>
     <section className="listings-container">
          <ListingsGrid category={category} /> {/* Pass the category prop */}
        </section>
      
      
        <Footer />
      
    </div>


  );
}

export default App;