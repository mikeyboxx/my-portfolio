import { useState } from "react";

const Contact = () => {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  
  const validateInput = (inputType, inputValue)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    let errorMsg = '';

    if (inputType === 'email'){
      if (!inputValue ) {
        errorMsg = `Email is required`;
      } else if (!re.test(email.toLowerCase())) {
        errorMsg = `Invalid email address`;
      }
    }
    
    if (inputType === 'userName'  && !inputValue ) {
      errorMsg = `Name is required`;
    } else if (inputType === 'message'  && !inputValue ) {
      errorMsg = `Message is required`;
    }

    return errorMsg;
  }

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    
    setErrorMessage('');
    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // Getting the value and name of the input which triggered the change
  const handleLostFocus = (e) => {
    const { target } = e;
    const error = validateInput(target.name, target.value);
    setErrorMessage(error);
  };

  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let error = '';

    if (!error) 
      error = validateInput('email', email);
    
    if (!error)
      error = validateInput('userName', userName);

    if (!error)
      error = validateInput('message', message);

    setErrorMessage(error);

    if (!error) {
      setErrorMessage(`Success`);
      setEmail('');
      setUserName('');
      setMessage('');
    }
  };

  return (
    <div className="card w-100 p-2">
      <div className="card-header text-start">
        <h4>Contact</h4>
        <form >
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              className="form-control"
              value={userName}
              name="userName"
              onChange={handleInputChange}
              onBlur={handleLostFocus}
              type="text"
              required
            />
          </div>
          

          <div className="mb-3">
            <label className="form-label">Email address:</label>
            <input
              className="form-control"
              value={email}
              name="email"
              onChange={handleInputChange}
              onBlur={handleLostFocus}
              type="email"
            />
          </div>

          <div className="mb-3">
            <label  className="form-label">Message:</label>
            <textarea
              className="form-control"
              value={message}
              name="message"
              onChange={handleInputChange}
              onBlur={handleLostFocus}
              rows="3"
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            onClick={handleFormSubmit}>Submit
          </button>
        </form>

        {errorMessage && (
        <div id='errorMsgs'>
          <p className={errorMessage === 'Success' ? 'text-success' : 'text-danger'}>{errorMessage}!</p>
        </div>
        )}
      </div>
    </div>
  )
}

export default Contact