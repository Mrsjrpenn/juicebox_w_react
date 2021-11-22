import React, { useState } from "react";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(

      
    const parsedResponse = await response.json();
    console.log(parsedResponse);
  }

  return (
    <>
      <h1>Login into your account:</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          value={username}
          onChange={handleUsername}
        />
        <input
          placeholder="password"
          type="text"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default LoginForm;
