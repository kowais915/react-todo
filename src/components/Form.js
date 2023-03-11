import { useState } from "react";
import '../styles/Form.css';


const Form = ({toDos, addtodo}) => {

  
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');


  
// formReset

const formReset = ()=>{
    setTitle('')
    setDate('')
}


//   get data from the form on submit
  const getData = ( event)=>{

    event.preventDefault();
  
    const todo = {
      title: title,
      description: description, 
      date: date
    }
    toDos(todo);
    console.log(todo);
    addtodo();
    
    formReset();
  
  }





    return (  

        <form className="form" onSubmit={getData} >
            <h2>Don't Just Add It! Come Back Later!</h2>
            <br />
            <label >

                <span>Title </span>
                <input type="text" onChange={e => setTitle(e.target.value) }  value={title}  />

            </label>



            <br></br>


            <label >

                <span>Description </span>
                <textarea type="text" onChange={e => setDescription(e.target.value) }  value={description}  />

            </label>

            <br />
            <label >

                <span>Due   </span>
                <input type="date" onChange={e => setDate(e.target.value)} value={date}/>

            </label>
            <br />
            
            <button  >Add</button>
           


        </form>

    );
}
 
export default Form;