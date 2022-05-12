import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Home from './components/Home';
import ChartView from './components/ChartView';
import NotFound from './components/NotFound';
import AddSection from './components/AddSection';

function App() {
  return (
    <div className="container-fluid">
      <div className='container '>
        <div className='content'>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home />}/>
            <Route path='/chart' element={<ChartView/>}/>
            <Route path="/add-section" element={<AddSection/>}/>

            <Route path='/notFound' element={<NotFound/>}/>
            <Route path="*" element={<Navigate to ="/notFound" />}/>
          </Routes>     
        </BrowserRouter> 
        </div>
      </div>
    </div>
  );
}

export default App;
