import React from 'react'

const CreateUser = () => {
  return (
    <div>
      <h2>Create User</h2>
      <form>
        <label>Name: </label>
        <input type="text" name="name"/>
        <br />
        <label>Email: </label>
        <input type="text" name="email"/>
        <br />
        <label>Mobile: </label>
        <input type="text" name="mobile"/>
        <br />
        <button>Save</button>
      </form>
    </div>
  );
};

export default CreateUser;
