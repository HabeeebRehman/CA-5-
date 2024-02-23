// Importing necessary hooks and components
import React, { useState, useContext } from 'react';
import { UserData } from '../UserData';
import { useNavigate } from 'react-router-dom';
import './form.css';

// Initial state for user details
const initialUserDetails = {
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

// UserForm component
const UserForm = () => {
    // Using context to get and set user data
    const [user, setUser] = useContext(UserData);
    
    const [userDetails, setUserDetails] = useState(initialUserDetails);
    const [validationErrors, setValidationErrors] = useState({});

    
    const navigate = useNavigate();

    // Function to handle user input and update state
    const handleUserInput = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    // Function to validate user details
    const validateUserDetails = () => {
        let newErrors = {};

        // Validation for Name
        if (!userDetails.firstName || userDetails.firstName.trim() === "") {
            newErrors.firstName = "Please enter a valid first name!";
        } else if (userDetails.firstName.length < 3) {
            newErrors.firstName = "Name should be greater than 3!";
        }

        // Validation for email
        if (!userDetails.email || !/@/.test(userDetails.email)) {
            newErrors.email = "Please enter a valid email!";
        }

        // Validation for password
        if (!userDetails.password || userDetails.password.trim() === "") {
            newErrors.password = "Please enter a password!";
        } else if (userDetails.password.length < 10) {
            newErrors.password = "Password should be greater than 10!";
        } else if (!/[ @#$%^&*()!_+]/.test(userDetails.password)) {
            newErrors.password = "Password should include at least 1 symbol !";
        }

        // Validation for confirmPassword
        if (userDetails.password !== userDetails.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match !";
        }

        return newErrors;
    };

    // Function to handle form submission
    const handleFormSubmission = (e) => {
        e.preventDefault();
        const formErrors = validateUserDetails();

        // If there are no errors, update user data and navigate to home page
        if (Object.keys(formErrors).every(key => !formErrors[key])) {
            setUser(userDetails);
            navigate('/');
        }

        // Update errors
        setValidationErrors(formErrors);
    };

    // Rendering the form
    return (
        <div className='form-main'>
            <div className='head'>
            <h1>Create an account</h1>
            </div>
            <form onSubmit={handleFormSubmission} className='input-form'>
                <div className='input-group'>
                    <input type="text" placeholder="Enter your Name" name="firstName"
                        value={userDetails.firstName} onChange={handleUserInput} />
                    {validationErrors.firstName && <p>{validationErrors.firstName}</p>}
                </div>

                <div className='input-group'>
                    <input type="text" placeholder=" Enter Your Email" name="email"
                        value={userDetails.email} onChange={handleUserInput} />
                    {validationErrors.email && <p>{validationErrors.email}</p>}
                </div>

                <div className='input-group'>
                    <input type="password" placeholder=" Enter Your Password" name="password"
                        value={userDetails.password} onChange={handleUserInput} />
                    {validationErrors.password && <p>{validationErrors.password}</p>}
                </div>

                <div className='input-group'>
                    <input type="password" placeholder="Confirm Password" name="confirmPassword"
                        value={userDetails.confirmPassword} onChange={handleUserInput} />
                    {validationErrors.confirmPassword && <p>{validationErrors.confirmPassword}</p>}
                </div>
                <div className='btn'>
                    <input className='submit' type="submit" value="Register" /> 
                </div>
            </form>
        </div>
    );
};

// Exporting UserForm component
export default UserForm;
