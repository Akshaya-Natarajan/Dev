
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Home from './components/Home';
import Profile from './components/Profile';
import Work from './components/Work';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ThemeProvider, createTheme} from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import {Card, CardContent, CardMedia, Switch, Typography} from "@mui/material"
function App() {
  return (
    <div>
     <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Skill' element={<Skill/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Work' element={<Work/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
