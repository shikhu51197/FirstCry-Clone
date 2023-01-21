import "./App.css";
import Adminlogin from './AdminPanel/Adminlogin';


import Cart from "./Components/Cart";
import Login from "./Registration/Login";

import MyAccount from './MyAccount/MyAccount';
import Products from "./Product/Products";
import Home from "./HomePage/Home";

function App() {
  return (
    <div className="App">
      {/* <Adminlogin />
 
      <Login />
      <Cart />
       <MyAccount/>  */}
          <Home/>
      {/* <Products /> */}
    </div>
  );
}

export default App;
