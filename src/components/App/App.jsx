import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';

function App() {
  let [gallery, setGallery] = useState([]);

  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = () => {
    axios
      .get('/gallery')
      .then((response) => {
        console.log('in getGallery', response.data);
        setGallery(response.data);
      })
      .catch((error) => {
        console.log('error in getGallery', error);
      });
  };

  return (
    <div className="App">
      <Header />
      <p>Gallery goes here</p>
      <img src="images/goat_small.jpg" />
    </div>
  );
}

export default App;
