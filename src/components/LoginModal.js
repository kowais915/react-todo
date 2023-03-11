import { useState } from 'react';
import '../styles/Modal.css'


const LoginModal  = ({handleLogin}) => {

    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    



const reset = ( )=>{
    setEmail('')
    setPassword('')
}


const loginData = ( event)=>{
    event.preventDefault()

    let logData = {
        email: email, 
        password: password, 
        id: Math.floor(Math.random( ) * 10000)
    }

    console.log(logData)

    // if (logData.email == ''){
    //     loginData()
    // }
    handleLogin()
    reset();
}


    return ( 

        <div className="backdrop">
            <div className="loginModal">
                <form onSubmit={loginData}>
                    <label >
                        Email:
                        <input type="email" onChange={e => setEmail(e.target.value)}  value={email}/>
                    </label>


                    <label>
                        Password:
                        <input type="password" onChange ={e => setPassword(e.target.value) } value={password} />
                    </label>

                <button>Submit</button>

                </form>
            </div>
        </div>



     );
}
 
export default LoginModal ;