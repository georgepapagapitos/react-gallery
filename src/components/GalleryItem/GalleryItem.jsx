import './GalleryItem.css';
import {useState} from 'react';

function GalleryItem({ item, addLike, deleteImage }) {

  let [imageToggle, setImageToggle] = useState(true);

  const handleClick = (event) => {
    console.log('clicked', event.target.dataset.id);
    setImageToggle(!imageToggle);
  }

  return (
    <div className="responsive">
      <div className="gallery-item">
        <div className="image-section" onClick={handleClick} data-id={item.id}>
          {
            imageToggle ? 
            <img src={item.path} alt={item.description} data-id={item.id} /> : 
            <div data-id={item.id} className="item-description"> {item.description} </div>
          }
        </div>
        <div className="like-section">
          <button className="btn-add" onClick={addLike} data-id={item.id}>
            ❤️
          </button>
          <button className="btn-delete" onClick={deleteImage} data-id={item.id}>❌</button>
          <p>{item.likes} people love this!</p>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
