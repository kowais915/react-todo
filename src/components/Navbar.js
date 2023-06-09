import {Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({add, deleteAll}) => {
    return ( 

        <nav>
            <div className="title">
              <h2>Just Do It!</h2>  
            </div>

          
                    <ul className="links" >
                        <li><a href="#">About</a></li>
                        <li><a href="#">GitHub</a></li>
                    </ul>

                    
           
           <div className="buttons">
                <button className='add' onClick={add}>Add</button>
                <button className='add' onClick={deleteAll}>Delete All</button>
               
           </div>
            
        </nav>
     );
}
 
export default Navbar;