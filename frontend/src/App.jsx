import { BrowserRouter,Routes,Route } from "react-router-dom"; 
import { LoginPage, SignupPage, Home,CreateProduct} from "./Routes.jsx"

import './App.css';
import CreateProduct from "./pages/createProduct.jsx";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Signup" element={<SignupPage/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/create-product" element={<CreateProduct />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;