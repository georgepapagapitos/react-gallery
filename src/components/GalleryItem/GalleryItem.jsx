import './GalleryItem.css';
import {useState} from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

function GalleryItem({ item, addLike, deleteImage }) {

  let [imageToggle, setImageToggle] = useState(true);

  const toggleImage = (event) => {
    console.log('clicked', event.target.dataset.id);
    setImageToggle(!imageToggle);
  }

  return (
    <div className="responsive">
      <div className="gallery-item">
        <div className="image-section" onClick={toggleImage} data-id={item.id}>
          {
            imageToggle ? 
            <img src={item.path} alt={item.description} data-id={item.id} /> : 
            <div data-id={item.id} className="item-description"> {item.description} </div>
          }
        </div>
        <div className="btn-section">
          <Button variant="contained" color="primary" onClick={addLike} data-id={item.id}>
            ❤️ Love
          </Button>
          <Button startIcon={<DeleteIcon />} variant="contained" color="secondary" onClick={deleteImage} data-id={item.id}>
            Delete
          </Button>
          {
            item.likes === 1 ? 
            <p>{item.likes} person loves this!</p> : 
            <p>{item.likes} people love this!</p>
          }
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
