import './AddImageForm.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function AddImageForm({addImage, newImageURL, setNewImageURL, newImageDesc, setNewImageDesc}) {
  return (
    <div className="image-form">
      <h2 className="form-title">Add Your Image:</h2>
      <form>
      <span className="input">
          <TextField
            variant="outlined"
            id="outlined-basic"
            type="text" 
            placeholder="Enter Image URL" 
            onChange={(event) => setNewImageURL(event.target.value)}
            value={newImageURL}
          />
      </span>
      <span className="input">
          <TextField
            variant="outlined"
            id="outlined-basic"
            className="desc-in" 
            type="text" 
            placeholder="Describe Your Image" 
            onChange={(event) => setNewImageDesc(event.target.value)}
            value={newImageDesc}
          />
      </span>
          <Button id="btn-submit" type="submit" variant="contained" color="primary" component="span" onClick={addImage}>
            Upload
          </Button>
          
      </form>
    </div>
  )
}

export default AddImageForm;