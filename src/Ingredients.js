import React, { useState } from 'react'
import {Modal,Header,Button} from 'react-bootstrap'
export default function Ingredients(props) {
    const [show, setShow] = useState(false);

    
    const handleShow = () => setShow(true);
    console.log("DATA " , props.data);
    let element = props.data
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         
        </Button>
  
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ingredients {element.strMeal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={props.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
