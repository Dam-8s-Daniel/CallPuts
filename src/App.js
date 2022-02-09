import './App.css';
import Header from './components/Header'
import Stocks from './components/stocks'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import News from './components/News'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
    <div>
        <Header/>   
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/stocks' element={<Stocks/>}/>
      <Route path='/research' element={<News/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </Router>
  );
}

export default App;
