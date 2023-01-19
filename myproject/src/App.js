
import './App.css';
// import Adminlogin from './AdminPanel/Adminlogin';
import FristNav from './Navbar/FristNav';
import Catbar from './Navbar/Catbar';

// import Cart from './Components/Cart';
// import Login from './Registration/Login';

import Cart from './Components/Cart';
import Login from './Registration/Login';
import Carousels from './Carousels/Carousels';
function App() {
  return (
    <div className="App">
    <h1> My App</h1>
    {/* <Adminlogin/> */}
       <FristNav/>
    <Catbar/>

      {/* <Login />
  <Cart/>  */}

    <Carousels/>
      <Login />
  <Cart/>

  </div>
)
}

export default App;
