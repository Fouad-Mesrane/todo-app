import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/register" element={<Register/>} />
      <Route path="/auth/login" element={<Login/>} />
      <Route path="*" element = {<NotFound/>}/>
    </Routes>
  );
}

export default App;
