import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Login from "./Components/UserLogin/Login";
import SignUp from "./Components/UserLogin/SignUp";
import PrivateAuth from "./Components/UserLogin/PrivateAuth";
import Canva from "./Components/Canva/Canva";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={
          <PrivateAuth>
            <Canva></Canva>
           
          </PrivateAuth>
        }></Route>
        <Route path="/home" element={
          <PrivateAuth>
             <Canva></Canva>
          </PrivateAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/canva" element={<Canva></Canva>} />

      </Routes>
    </div>
  );
}

export default App
