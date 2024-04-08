import './App.css';
import Navbar from './component/navbar';
import Sidebar from './component/sidebar';
import{ BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/products';
import Add from './pages/addproduct';
import Productdetails from './pages/productsdetails';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    
     <div className='row'>
      <div className='col-2 sidebar'>
      <Sidebar/>
      </div>
      <div className='col-10'>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pro" element={<Products/>}  />
        <Route path="/pro/add" element={<Add/>} />
        <Route path="/pro/:productID" element={<Productdetails/>} />




          {/* <Route path="/pro"  exact>
          <Products/>
          </Route>

          <Route path="/pro/add" >
            <Add/>
          </Route>
          
          <Route path="/pro/:productID">
            <Productdetails/>
          </Route> */}
          
        </Routes>
      
      </div>
     </div>
    </BrowserRouter> 
  
    </div>
  );
}

export default App;
