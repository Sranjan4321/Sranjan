import "./App.css";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import TennerGoods from "./Products/TennerGoods";
import Mazama from "./Products/Mazama";
import Apparel from "./Products/Apparel";
import Feature from "./Products/Feature";
import EndOfSeason from "./Products/EndOfSeason";
import Login from "./Component/Login";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route parth={"/tenner"} element={<TennerGoods />} />
        <Route path={"/mazama"} element={<Mazama />} />
        <Route path={"/apparel"} element={<Apparel />} />
        <Route path={"/feature"} element={<Feature />} />
        <Route path={"/endofsale"} element={<EndOfSeason />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
