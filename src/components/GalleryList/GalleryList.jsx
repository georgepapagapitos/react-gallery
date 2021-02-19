import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ gallery, addLike }) {
  console.log('in galleryList', gallery);
  return (
    <>
      {gallery.map((item) => (
        <GalleryItem key={item.id} item={item} addLike={addLike} />
      ))}
      <div className="clearfix"></div>
    </>
  );
}

export default GalleryList;
