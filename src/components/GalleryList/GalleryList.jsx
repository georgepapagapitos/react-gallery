import './GalleryList.css';

function GalleryList({ gallery }) {
  console.log('in galleryList', gallery);
  return (
    <>
      {gallery.map((item) => (
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href={item.path}>
              <img src={item.path} alt={item.description} />
            </a>
            <div className="likes">
              <button>❤️</button>
              <p>{item.likes} people love this!</p>
            </div>
          </div>
        </div>
      ))}
      <div class="clearfix"></div>
    </>
  );
}

export default GalleryList;
