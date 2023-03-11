import Form from './components/Form';
import Modal from './components/Modal';
import { useState } from 'react';
import LoginModal from './components/LoginModal';
import ToDoCard from './components/ToDoCard';


function App() {
const [modal, setModal ] = useState(false);
const [events, setEvents ] = useState({});
const [loginModal, setLoginModal ] = useState(false);
const [data, setData ] = useState([])






const show = ( )=>{
  setModal(true)
}


const showLogin =( )=>{
  setLoginModal(true);
}


  const handleModal = ( )=>{
      setModal(false)
  }


  const handleLogin = ( )=>{
    setLoginModal(false)
  }


  return (
    <div className="App">
      
      <ToDoCard />
      <ToDoCard />
      
    </div>
  );
}


export default App;
