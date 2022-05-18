import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hook/useFirebase';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const {signUp}=useFirebase();

    const handleBlur=(e)=>{
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...loginData };
        newData[field] = value
        setLoginData(newData)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        signUp(loginData.name, loginData.email,loginData.password);
    }
    return (
        <div>
            <h4 className='text-dark'>Please Register now!</h4>
             <form onSubmit={handleSubmit}>
             <input name="name" onBlur={handleBlur} type="text" placeholder='enter name'/>
                <br/>

                <input name="email" onBlur={handleBlur} type="text" placeholder='enter email'/>
                <br/>
                <input name="password" onBlur={handleBlur} type="password" placeholder='*****'/>
                <br/>
                <input className='btn btn-primary mt-2' type="submit" value="login"/>
                <br/>
            </form>
            <Link to="/"><span className='text-success'>already registered! please log-in</span></Link>
        </div>
    );
};

export default Register;