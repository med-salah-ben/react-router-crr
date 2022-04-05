import React, {useState} from 'react';
import StarsRating from 'stars-rating';
import { v4 as uuidv4 } from 'uuid';
import  {Modal,Button,Form} from   "react-bootstrap"

const AddMovie = ({handleMovie}) => {
    const [show, setShow] = useState(false);
    const [name,setName]= useState("");
    const [image,setImage]= useState("");
    const [description,setDes]= useState("");
    const [rating,setRating] =useState(0);
    const [year,setYear] =useState("");
   console.log(name,image,description,rating,year)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
         
  <Form.Group className="mb-3">
    <Form.Label>Movie Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name.." onChange={(e)=>setName(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Movie Image</Form.Label>
    <Form.Control type="text" placeholder="Enter Image.." onChange={(e)=>setImage(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Movie description</Form.Label>
    <Form.Control type="text" placeholder="Enter description.." onChange={(e)=>setDes(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Movie year</Form.Label>
    <Form.Control type="text" placeholder="Enter year.." onChange={(e)=>setYear(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3">
  <StarsRating
  count={5}
  onChange={(newValue)=>{
      setRating(newValue)
  }}
  size={24}
  color2={'#ffd700'} />
  </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{ handleMovie({id:uuidv4(),name,image,description,year,rating}) ; handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default AddMovie