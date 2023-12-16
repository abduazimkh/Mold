import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Private from './private/Private';
import Admin from './admin/Admin';
import Login from './auth/Login';
import { createBrowserHistory } from 'history';
import Home from './home/Home';
import View from './view/View';
import MainCategory from './view/MainCategory';
import ReactGA from 'react-ga';
import About from './about/About';
import Contact from './contact/Contact';
import Partners from './partners/Partners';
// import Page404 from './page404/Page404'
const history = createBrowserHistory();

history.listen(location => {
  ReactGA.pageview(location);
})

const index = () => { 
  return (
    <Switch>   
        <Route exact path="/" render={() => <Home/>}/>
        <Private path="/admin" render={() => <Admin/>} />
        <Route path="/about" render={() => <About/>} />
        <Route path="/contact" render={() => <Contact/>} />
        <Route path="/partners" render={() => <Partners/>} />
        <Route path="/login" render={() => <Login/>} />
        <Route path="/maincategory/:maincategoryName" render={() => <MainCategory/>} />
        <Route path="/subcategory/:subcategory" render={() => <MainCategory/>} />
        <Route path="/product-view/:productId" render={() => <View/>} />
        {/* <Route path="*" render={() => <Page404/>} /> */}
    </Switch>
  )
}

export default index
