import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import FirstPage from './containers/FirstPage';
import SecondPage from './containers/SecondPage';
import './sass/main.scss';
import Navbar from './components/Navbar';

function App() {
    return(
        <>
            <Router>
                <Navbar/>
                <div className='stranice'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/FirstPage' component={FirstPage} />
                    <Route path='/SecondPage' component={SecondPage} />
                </Switch>
                </div>
            </Router>


        </>
    );

}

export default App;
