import '../styles/Modal.css';

const Modal = ({handleModal}) => {
    return (
        <div className="backdrop">
            <div className="modal">
                <h3>40% Off</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, voluptates?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, dolor.
                </p>

                <button onClick={handleModal}>Close</button>
            </div>
        </div>

      );
}
 
export default Modal;