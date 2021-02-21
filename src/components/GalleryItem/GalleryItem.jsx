import './GalleryItem.css';

function GalleryItem({ item, addLike, handleClick, toggleImage }) {
  return (
    <div className="responsive">
      <div className="gallery-item">
      <div className="gallery-image" onClick={handleClick}>
        {toggleImage ? <img src={item.path} alt={item.description} data-id={item.id} /> : <div>{item.description}</div>}
      </div>
        <div className="like-section">
          <button onClick={addLike} data-id={item.id}>
            ❤️
          </button>
          <p>{item.likes} people love this!</p>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
