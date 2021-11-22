import React, { useState } from "react";

function RegisterForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(event) {
    setUsername(event.target.value);
    console.log(username);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

    const parsedResponse = await response.json();
    console.log(parsedResponse);
    const token = parsedResponse.data.token;

    window.localStorage.setItem("token", token);
  
  }

  return (
    <>
      <h1>Register here:</h1>
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

export default RegisterForm;
