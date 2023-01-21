import "./App.css";
import Admin from './AdminPanel/Admin';
import FristNav from "./Navbar/FristNav";
import Catbar from "./Navbar/Catbar";


import Cart from "./Components/Cart";
import Login from "./Registration/Login";
import Carousels from "./Carousels/Carousels";
import MyAccount from './MyAccount/MyAccount';
function App() {
  return (
    <div className="App">
      {/* <Admin /> */}
      <FristNav />
      <Catbar />
      <Carousels />
      <Login />
      <Cart />
      <MyAccount/>
    </div>
  );
}

export default App;
