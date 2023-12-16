import React, { Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import "./components/language/i18next"
import "react-toastify/dist/ReactToastify.css";
import { MainLoader } from './components/loader/Loader';
import "number-brm"
const App = lazy(() => import('./App')) ;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <Suspense fallback={<MainLoader/>}>
      <App />
    </Suspense>
  </Provider>
</BrowserRouter>
)