import React from 'react'
import "./Register.css"

function Register() {
    return (
        <div>
            <div>
                <div>
                    <div className='card'>
                        <div className='card-title'>Login</div>
                        <div className='card-body'>
                            <div className='inputs'><input type="text"  id="FirstName" placeholder='FirstName' /></div>
                            <div className='inputs'><input type="text"  id="LastName" placeholder='LastName' /></div>
                            <div className='inputs'><input type="number"  id="Mobile" placeholder='Mobile' /></div>
                            <div className='inputs'><input type="text"  id="UserName"  placeholder='UserName' /></div>
                            <div className='inputs'><input type="password"  id="password"  placeholder='password' /></div>
                        </div>
                        <div>
                            <button className='btn btn-success'>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register