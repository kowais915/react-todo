
import '../styles/Modal.css';
import Form from '../components/Form'

const Modal = ({handleModal}) => {
    return (
        <div className="backdrop">
            <div className="modal">
               <Form/>
            </div>
        </div>

      );
}
 
export default Modal;