import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
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
    const imageId = event.currentTarget.dataset.id;
    console.log(imageId);
    axios
      .put(`/gallery/like/${imageId}`)
      .then((response) => {
        console.log('in addLike', response);
        getGallery();
      })
      .catch((error) => {
        console.log('error in addLike', error);
      });
  };

  const deleteImage = (event) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this image!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Your image has been deleted!", {
          icon: "success",
        });
        console.log('delete', event.target);
        const imageId = event.target.dataset.id;
        console.log('deleting', imageId);
        axios
        .delete(`/gallery/${imageId}`)
        .then(response => {
          console.log('deleted img with id:', imageId);
          getGallery();
        })
        .catch(error => {
          console.log('error deleting', error);
          alert('could not delete img with id:', imageId);
        });
      } else {
        swal("Your image is safe!");
      }
    });
  }

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
        deleteImage={deleteImage}
      />
    </div>
  );
}

export default App;
