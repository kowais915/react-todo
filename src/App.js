import { useState } from 'react';
import ToDoCard from './components/ToDoCard';
import Navbar from './components/Navbar';
import Modal from './components/Modal';


function App() {

const [add, setAdd] = useState(false);


const [data, setData ] = useState([]);




const toDos = ( event)=>{
  setData((prevData )=>{
      return [...prevData, event ]
  })
}









const addtodo = ( )=>{
  setAdd(true);
}

const modalTodo = ( )=>{
  setAdd(false);
}




  return (
    <div className="App">

      <Navbar add = {addtodo}/>
      <ToDoCard />
      <ToDoCard />

     {add && <Modal toDos = {toDos} modalTodo ={modalTodo}/>}
      
    </div>
  );
}


export default App;
