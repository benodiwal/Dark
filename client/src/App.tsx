import Home from "./Home/Home";
import User from "./user/User";
import Community from "./communities/Community";
import Navbar from "./components/Navbar"
import SumitWidget from "./submit/SumitWidget";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./auth/Auth";
import { useSelector } from "react-redux";

const App = () => {

  const token = useSelector((state: any) => state.user.token);
  const isLoggedIn = token && token;

  return (
    <div
    className="h-screen bg-black/90 w-screen overflow-x-hidden overflow-y-auto relative"
    >
      <Navbar />
      <div className="mt-5 flex flex-col mx-auto items-center">
        <Routes>
          <Route path="/auth" element={!isLoggedIn ? <Auth /> : <Navigate to="/" />}/>
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/auth" />}/>
          <Route path="/submit" element={<SumitWidget />}/>
          <Route path="/user/:user*" element={<User />}/>
          <Route path="/r/:community" element={<Community />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App