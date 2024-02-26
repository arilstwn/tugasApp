import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useHistory();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (password !== confirmPassword) {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: 'Password and confirm password do not match',
        });
        return;
      }
  
      try {
        const response = await axios.post('http://localhost:3030/user', {
          name,
          email,
          password
        });
  
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'Your account has been created successfully!',
        }).then(() => {
          history.push('/login');
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.response.data.message,
        });
      }
    };

    return (
        <div className="form login mt-5">
            <form onSubmit={handleSubmit}>
                <span className="title">Register</span>
                <div className="input-field">
                    <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <i className="uil uil-user icon"></i>
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <i className="uil uil-envelope icon"></i>
                </div>
                <div className="input-field">
                    <input type="password" className="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <i className="uil uil-lock icon"></i>
                </div>
                <div className="input-field">
                    <input type="password" className="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    <i className="uil uil-lock icon"></i>
                </div>

                <div className="checkbox-text">
                    <div className="checkbox-content">
                        <input type="checkbox" id="logCheck" />
                        <label htmlFor="logCheck" className="text">Remember me</label>
                    </div>

                    <a href="" className="text">Forgot password</a>
                </div>

                <div className="input-field button">
                    <input type="submit" value="Register Now" />
                </div>
            </form>

            <div className="login-signup">
                <span className="text">Already a member?</span>
                <a href="login" className="text signup-text">Login Now</a>
            </div>
        </div>
    );
}

export default RegisterForm;
