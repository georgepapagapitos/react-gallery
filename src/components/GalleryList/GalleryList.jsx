import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ gallery, addLike }) {
  console.log('in galleryList', gallery);
  return (
    <div className="gallery">
      {gallery.map((item) => (
        <GalleryItem key={item.id} item={item} addLike={addLike} />
      ))}
    </div>
  );
}

export default GalleryList;
