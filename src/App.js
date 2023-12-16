import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import BackToTop from './components/backtotop/Backtotop';
import Footer from './components/footer/Footer';
import Routes from './routes';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

function App() {
 const {pathname } = useLocation();
 useEffect(() => {
   ReactGA.initialize("G-FZVQ7V4YML")
 }, [])
  return (
    <>
      <BackToTop/>
     <Routes />
     <ToastContainer limit={2}/>
      {pathname === "/login" || pathname.includes("/admin") ? <></> :  <Footer/>}
    </>
  );
}

export default App;
