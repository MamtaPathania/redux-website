
import './App.css';
// import Home from './pages/Home';
// import Cart from './pages/Cart';
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Navbar from './component/Navbar';
import { Provider } from 'react-redux';
import store from './Store/store'
import Create from './component/Create';

function App() {
  return (
    <div>
<Create/>
      <Provider store={store}>
{/* <BrowserRouter>
<Navbar/>
<Routes>
  
  <Route path="/" element={<Home/>}/>
  <Route path="/cart" element={<Cart/>}/>
  
</Routes>
</BrowserRouter>  */}
</Provider>
    </div>
  );
}

export default App;
