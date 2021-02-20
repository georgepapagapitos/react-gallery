import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';

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

  const addLike = (event) => {
    const itemId = event.target.dataset.id;
    console.log(itemId);
    axios
      .put(`/gallery/like/${itemId}`)
      .then((response) => {
        console.log('in addLike', response);
        getGallery();
      })
      .catch((error) => {
        console.log('error in addLike', error);
      });
  };

  return (
    <div className="App">
      <Header />
      <GalleryList
        gallery={gallery}
        addLike={addLike}
      />
    </div>
  );
}

export default App;
