
import HomePage from '../src/homePage/Home.jsx';
import AboutPage from './aboutPage/AboutPage.jsx';
import {Routes,Route} from "react-router-dom"

import './App.css';

function App() {
  return (

    <div className="App">

        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      
   
    </div>
  );
}

export default App;
