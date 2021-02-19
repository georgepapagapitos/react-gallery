import './GalleryItem.css';

function GalleryItem({ item, addLike }) {
  return (
    <div className="responsive">
      <div className="gallery">
        <img src={item.path} alt={item.description} />
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
