import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ gallery, addLike, deleteImage }) {
  return (
    <div className="gallery">
      {gallery.map((item) => (
        <GalleryItem 
          key={item.id}
          item={item}
          addLike={addLike}
          deleteImage={deleteImage}
        />
      ))}
    </div>
  );
}

export default GalleryList;
