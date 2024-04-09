import React, { useState } from 'react'

const CreateUser = () => {
    const[inputs, setInputs] = useState({}); 

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) =>({...values, [name]: value}));
    
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8005/api/', inputs);
        console.log(inputs);
    };

  return (
    <div className='container'>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className='form-group'>
        <label>Name: </label>
        <input type="text" name="name" onChange={handleChange}/>
        <label>Email: </label>
        <input type="text" name="email" onChange={handleChange}/>
        <label>Mobile: </label>
        <input type="text" name="mobile" onChange={handleChange}/>
        <br />
        <button className='button'>Save</button>
      </form>
    </div>
  );
};

export default CreateUser;
