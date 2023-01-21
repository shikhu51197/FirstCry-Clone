import "./App.css";
import Adminlogin from './AdminPanel/Adminlogin';
import FristNav from "./Navbar/FristNav";
import Catbar from "./Navbar/Catbar";


import Cart from "./Components/Cart";
import Login from "./Registration/Login";
import Carousels from "./Carousels/Carousels";
import MyAccount from './MyAccount/MyAccount';
import Products from "./Product/Products";

function App() {
  return (
    <div className="App">
      {/* <Adminlogin />
      <FristNav />
      <Catbar />
      <Carousels />
      <Login />
      <Cart />
       <MyAccount/>  */}
      <Products />
    </div>
  );
}

export default App;
