import {useState,React} from "react"
import {Modal,Button} from 'react-bootstrap';
import { useNavigate,Navigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();
    const [lgShow, setLgShow] = useState(true);
    let token = localStorage.getItem('token');
    
    const hideModal = () =>{
        setLgShow(false)
        navigate("/home")
    }


    return (
    <>
        {!token && <Navigate to="/" />}
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => 
            hideModal()
        }
        
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
           Logout
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button
            onClick={() => {
            
            window.localStorage.removeItem("token")
            navigate("/");
            
            }}
        >
            Close  session
        </Button>
        </Modal.Body>
        </Modal>
    </>
      
      
    );
      
    
  
}

