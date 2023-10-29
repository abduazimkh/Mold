import classes from './App.module.scss';
import Nav from './components/nav/Nav';
import Home from './routes/home/Home';
import About from './routes/about/About';
import Contact from './routes/contact/Contact';
import Partners from './routes/partners/Partners';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={classes.App__main}>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/partners' element={<Partners/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
