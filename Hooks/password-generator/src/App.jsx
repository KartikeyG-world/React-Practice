import { useState, useCallback } from "react";
function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str[char];
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <input
        type="text"
        style={{ padding: "10px", margin: "10px", borderRadius: "10px" }}
        value={password}
        placeholder="Your Password"
        id="password"
        readOnly
      />
      <button
        style={{
          padding: "10px",
          fontWeight: "bold",
          fontSize: "15px",
          borderRadius: "20px",
          cursor: "pointer",
        }}
        onClick={() => {
          navigator.clipboard.writeText(password);
          alert("Password Copied to Clipboard");
        }}
      >
        Copy
      </button>
      <div>
        <label htmlFor="length">Password Length :-</label>
        <input
          type="number"
          id="length"
          value={length}
          style={{
            margin: "10px",
            padding: "6px",
            width: "50px",
            borderRadius: "5px",
          }}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="numberAllowed">Allow Numbers</label>
        <input
          type="checkbox"
          id="numberAllowed"
          style={{
            margin: "10px",
            padding: "6px",
            width: "50px",
            height: "20px",
            borderRadius: "5px",
          }}
          checked={numberAllowed}
          onChange={(e) => setNumberAllowed(e.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="characterAllowed">Allow Special Characters</label>
        <input
          type="checkbox"
          id="characterAllowed"
          style={{
            margin: "10px",
            padding: "6px",
            width: "50px",
            height: "20px",
            borderRadius: "5px",
          }}
          checked={characterAllowed}
          onChange={(e) => setCharacterAllowed(e.target.checked)}
        />
      </div>
      <button
        onClick={() => {
          passwordGenerator();
          console.log("Password Generated");
        }}
        style={{
          padding: "10px",
          fontWeight: "bold",
          fontSize: "15px",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;
