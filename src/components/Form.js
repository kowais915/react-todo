import { useState } from "react";


const Form = () => {

    const[name, setName ] = useState('');
    const[date, setDate ] = useState('');
    const[data, setData ] = useState({});


    const formReset =()=>{
        setName('')
        setDate('')
    }

    const formData = (e)=>{

        e.preventDefault()
        
        const event = {
            name: name, 
            date: date,
            id: Math.floor(Math.random()*10000)
        }

        console.log(event);
        formReset()
    }







    return (  

        <form className="form" onSubmit={formData}>
            <h1>Welcome Back!</h1>
            <label >

                <span>Name </span>
                <input type="text" onChange={(e)=> setName(e.target.value)} value={name}/>

            </label>

            <br></br>
            <label >

                <span>Date   </span>
                <input type="date" onChange={e => setDate(e.target.value)} value={date}/>

            </label>
            
            <button>Submit</button>
           


        </form>

    );
}
 
export default Form;