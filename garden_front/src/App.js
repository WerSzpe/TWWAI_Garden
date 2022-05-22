import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { isExpired } from "react-jwt";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Home from './components/Home';
import ChartView from './components/ChartView';
import Login from './components/Login';

function App() {
  const token = localStorage.getItem("token");
  const validToken = !isExpired(localStorage.getItem("token"));

  if(!validToken){
    return(
      <div className="container-fluid">
        <div className='container '>
          <div className='content'>
            <Login />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container-fluid">
      <div className='container '>
        <div className='content'>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home token={token}/>}/>
            <Route path='/chart/:id' element={<ChartView token={token}/>}/>
            <Route path="*" element={<Navigate to ="/" />}/>

          </Routes>     
        </BrowserRouter> 
        </div>
      </div>
    </div>
  );
}

export default App;
