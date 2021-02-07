import { useRouteMatch, Route, Router, Switch, Redirect } from 'react-router-dom';
import MenuHeader from './Components/MenuHeader';
import GamePage from './routes/Game';
import HomePage from './routes/Home';
import Footer from './Components/Footer';
import s from './style.module.css';
import cn from 'classnames';




const App = () => {
  const match = useRouteMatch('/');
  return (
      <Switch>
          <Route path="/404" render={() => (
              <h1>The page is not found</h1>
          )} />
          <Route>
            <>
              <MenuHeader bgActive={!match.isExact}/>
              <div className={cn(s.wrap, {
                [s.isHomePage]: match.isExact
              })}>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/game" component={GamePage} />
                    <Route path="/about" render={() => (
                        <h1>This is page About</h1>
                    )} />
                    <Route path="/contact" render={() => (
                        <h1>This is page Contact</h1>
                    )} />
                    <Route render={() => (
                      <Redirect to="/404" />
                    )}/> 
                </Switch>
              </div>
              <Footer />
            </>  
          </Route>
      </Switch>
  )
};

export default App;