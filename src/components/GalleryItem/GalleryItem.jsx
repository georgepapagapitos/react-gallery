import './GalleryItem.css';

function GalleryItem({ item, addLike }) {
  return (
    <div className="responsive">
      <div className="gallery-item">
        <img src={item.path} alt={item.description} data-id={item.id} />
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
