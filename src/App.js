import { useState } from 'react';
import ToDoCard from './components/ToDoCard';
import Navbar from './components/Navbar';
import Modal from './components/Modal';


function App() {

const [add, setAdd] = useState(false)
const [data, setData ] = useState([])



const addtodo = ( )=>{
  setAdd(true);
}





  return (
    <div className="App">

      <Navbar add = {addtodo}/>
      <ToDoCard />
      <ToDoCard />

     {add && <Modal/>}
      
    </div>
  );
}


export default App;
