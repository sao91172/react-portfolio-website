import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import SayHello from './components/SayHello/SayHello';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<SayHello/>}/>
        {/* <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/> */}
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
