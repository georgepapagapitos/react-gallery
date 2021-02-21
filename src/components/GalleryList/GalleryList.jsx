import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ gallery, addLike, handleClick, toggleImage }) {
  console.log('in galleryList', gallery);
  return (
    <div className="gallery">
      {gallery.map((item) => (
        <GalleryItem key={item.id} item={item} addLike={addLike} handleClick={handleClick} toggleImage={toggleImage} />
      ))}
    </div>
  );
}

export default GalleryList;
