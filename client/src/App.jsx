import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Main from "./components/maincomp/Main";
import Background from "./components/maincomp/Background";
import ChangePassword from "./components/ChangePassword";

function App() {
  return (
    <div className="appSpace">
      <Background />
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/updateuser" element={<ChangePassword />} />
      </Routes>
    </div>
  );
}

export default App;
