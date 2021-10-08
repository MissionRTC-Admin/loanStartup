import { Switch, Route } from 'react-router-dom'
import { Login,Registration } from './Pages/index'

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Registration} />
      <Route exact path='/login' component={Login} />
    </Switch>
    </>
  );
}

export default App;
