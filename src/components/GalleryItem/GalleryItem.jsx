function GalleryItem({ item, addLike }) {
  return (
    <div className="responsive">
      <div className="gallery">
        <a target="_blank" href={item.path}>
          <img
            src={item.path}
            alt={item.description}
            width="600"
            height="400"
          />
        </a>
        <div className="likes">
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
