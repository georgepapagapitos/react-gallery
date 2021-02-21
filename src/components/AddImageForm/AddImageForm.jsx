import './AddImageForm.css';

function AddImageForm({addImage, newImageURL, setNewImageURL, newImageDesc, setNewImageDesc}) {
  return (
    <div className="image-form">
      <h2>Add Your Image:</h2>
      <form onSubmit={addImage}>
        <label>URL: 
          <input 
            className="url-in" 
            type="text" 
            placeholder="Enter image URL" 
            onChange={(event) => setNewImageURL(event.target.value)}
            value={newImageURL}
          />
        </label>
        <label>Description: 
          <input 
            className="desc-in" 
            type="text" 
            placeholder="Describe your image" 
            onChange={(event) => setNewImageDesc(event.target.value)}
            value={newImageDesc}
          />
        </label>
        <button className="btn-add"type="submit">➕</button>
      </form>
    </div>
  )
}

export default AddImageForm;