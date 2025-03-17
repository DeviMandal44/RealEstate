import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Forgot from "./Auth/Forgot";
import LayoutDashboard from "./Layout/LayoutDashboard";
import LayoutProperty from "./Layout/LayoutProperty";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/" element={<LayoutDashboard/>}/>
        <Route path="/Property" element={<LayoutProperty/>}/>

        <Route path="/forgot-password" element={<Forgot />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;