import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ gallery }) {
  console.log('in galleryList', gallery);
  return (
    <>
      {gallery.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
      <div className="clearfix"></div>
    </>
  );
}

export default GalleryList;
