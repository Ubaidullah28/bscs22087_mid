import {React, useState} from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ListingsGrid from './Components/ListingGrid';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar/>
      
      
      
      <section id="about" style={{ height: '30vh', backgroundColor: '#e2e2e2' }}>
        <h1>About Section</h1>
        <h3>The Open Movie Database
The Movies Explorer is a RESTful Movies site to obtain movie information, all content and images on the site
 are contributed and maintained by our users.</h3>
     </section>
      <section id="movies" style={{ height: 'auto', backgroundColor: '#f4f4f4' }}>
        <h1>Movies List</h1>
     <section className="listings-container">
          <ListingsGrid/>
        </section>
      </section>
        <Footer />
      
    </div>


  );
}

export default App;