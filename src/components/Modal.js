
import '../styles/Modal.css';
import Form from '../components/Form'

const Modal = ({toDos, modalTodo}) => {
    return (
        <div className="backdrop">
            <div className="modal">
               <Form toDos = {toDos} addtodo={modalTodo}/>
            </div>
        </div>

      );
}
 
export default Modal;