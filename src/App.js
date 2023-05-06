
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Navbar/>
        <div className='app-content'>
          <Routes>
            <Route path='/dialogs' Component={Dialogs}/>
            <Route path='/profile' Component={Profile}/>
            <Route path='/news' Component={News}/>
            <Route path='/music' Component={Music}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
  
