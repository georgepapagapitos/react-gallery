import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';
import AddImageForm from '../AddImageForm/AddImageForm';

function App() {
  let [gallery, setGallery] = useState([]);
  let [newImageURL, setNewImageURL] = useState('');
  let [newImageDesc, setNewImageDesc] = useState('');

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

  const addImage = (event) => {
    event.preventDefault();
    console.log('new url', newImageURL);
    console.log('new desc', newImageDesc);
    axios
    .post('/gallery', {
      path: newImageURL,
      description: newImageDesc
    })
    .then(response => {
      console.log('imaged added', response);
      getGallery();
      setNewImageURL('');
      setNewImageDesc('');
    })
  }

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
      <AddImageForm 
        addImage={addImage}
        newImageURL={newImageURL}
        setNewImageURL={setNewImageURL}
        newImageDesc={newImageDesc}
        setNewImageDesc={setNewImageDesc}
        />
      <GalleryList
        gallery={gallery}
        addLike={addLike}
      />
    </div>
  );
}

export default App;
