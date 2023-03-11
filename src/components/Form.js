import { useState } from "react";
import '../styles/Form.css';


const Form = () => {

  





    return (  

        <form className="form">
            <h2>Don't Just Add It! Come Back Later!</h2>
            <br />
            <label >

                <span>Title </span>
                <input type="text"  />

            </label>

            <br></br>
            <label >

                <span>Due   </span>
                <input type="date"/>

            </label>
            <br />
            
            <button>Add</button>
           


        </form>

    );
}
 
export default Form;