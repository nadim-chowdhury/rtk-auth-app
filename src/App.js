import { useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { loginUser } from "./redux/authSlice";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log(email, password);
    dispatch(loginUser(email, password));
  };

  return (
    <div className="App">
      <h1>RTK Auth App</h1>

      <div>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Log in</button>
      </div>
    </div>
  );
}
