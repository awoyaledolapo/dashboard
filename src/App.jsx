import { useState } from 'react'

import { Routes, Route} from "react-router-dom";
import Layout from './Components/Shared/Layout';

import Dashboard from './Pages/Dashboard';
import Products from './Pages/Products';

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <Routes>
      <Route   path='/dashboard' element={<Layout/>}>
      <Route    index  element={<Dashboard/>}/>
      <Route   path='/products' element={<Products/>}/>

      </Route>
    </Routes>

  
  )
}
 
export default App
