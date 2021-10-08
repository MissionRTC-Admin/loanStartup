import { Switch, Route } from 'react-router-dom'
import { Login } from './Pages/index'

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Login} />
    </Switch>
    </>
  );
}

export default App;
