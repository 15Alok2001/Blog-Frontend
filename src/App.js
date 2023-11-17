import TopBar from "./components/TopBar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Setting from "./pages/Settings/Setting";
import Write from "./pages/Write/Write";
import Home   from "./pages/home/Home";
import Single from "./pages/single/Single";
import { BrowserRouter as Router,Routes, Switch, Route } from "react-router-dom";

function App() {
  const user = false
  return (
   <Router>
   <TopBar/>
   <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/register" element={user? <Home/>: <Register />} />
    <Route path="/login" element={user ? <Home /> : <Login />} />
    <Route path="/Setting" element={user ? <Setting /> : <Register />} />
    <Route path="/write" element={user ? <Write /> : <Register />} />
    <Route path="/post/:postId" element={<Single />} />
   </Routes>
   </Router>
  );
}
export default App;
