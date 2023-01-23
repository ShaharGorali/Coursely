import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Header from "./components/maincomp/Header";
import Main from "./components/maincomp/Main";
import Background from "./components/maincomp/Background";

function App() {
  return (
    <div className="appSpace">
      <Background />
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
