import Form from './components/Form';
import Modal from './components/Modal';
import { useState } from 'react';


function App() {
const [modal, setModal ] = useState(false);
const [events, setEvents ] = useState({})

const time = ( )=>{
  for(let i = 0; i<10000; i++){
    console.log(i)
  }
}


const show = ( )=>{
  setModal(true)
}


  const handleModal = ( )=>{
      setModal(false)
  }
  return (
    <div className="App">
      <Form/>
      <button onClick={show}>Show Modal</button>
      {modal && <Modal handleModal = {handleModal}/>}
    </div>
  );
}


export default App;
