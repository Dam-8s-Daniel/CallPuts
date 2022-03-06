import './App.css';
import Header from './components/Header'
import Stocks from './components/stocks'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import News from './components/News'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import EditPortfolioPage from './components/EditPortfolioPage'
import AddInvestmentPage from './components/AddInvestmentPage'
import {useState} from 'react'
function App() {
  const [investmentToEdit, setInvestmentToEdit] = useState();

  return (
    <Router>
    <div>
        <Header/>   
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/portfolio' element={<Portfolio setInvestmentToEdit={setInvestmentToEdit}/>}/>
      <Route path='/stocks' element={<Stocks/>}/>
      <Route path='/research' element={<News/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/edit-investment' element={<EditPortfolioPage investmentToEdit={investmentToEdit}/>}/>
      <Route path='/add-investment' element={<AddInvestmentPage/>}/>
    </Routes>
    </Router>
  );
}

export default App;
