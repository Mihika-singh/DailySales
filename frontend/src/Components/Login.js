import React, { useState } from "react";

const Login = ({ onAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = () => {
    const validUsername = "trial";
    const validPassword = "assignment123";

    if (username === validUsername && password === validPassword) {
      onAuthenticated(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        height: "100%",
        minHeight: "100vh",  
        background:
          "linear-gradient(45deg, rgba(34,164,116,1) 0%, rgba(41,47,143,1) 100%)",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "auto",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ color: "#fff" }}>Verify User</h1>
      <br />
      {window.innerWidth<600 &&   <><br /><br /><br /></>}
      {errorMessage && (
        <span style={{ color: "red", fontSize: "15px", marginBottom: "10px" }}>
          {errorMessage}
        </span>
      )}
      <input
        type="text"
        className="inputbox"
        value={username}
        placeholder="Enter username"
        onChange={(e) => setUsername(e.target.value)}
      />
        {window.innerWidth<600 &&   <><br /> </>}
      <input
        type="password"
        className="inputbox"
        value={password}
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
  {window.innerWidth<600 &&   <><br /> </>}
      <button
        type="submit"
        onClick={submitForm}
        style={{
          width: "100%", 
          maxWidth: "200px",  
          padding: "10px",
          border: 0,
          borderRadius: "10px",
          marginTop: "20px",
          fontSize: "1rem",
          fontWeight: "bold",
          color: "grey",
          backgroundColor: "#fff",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
