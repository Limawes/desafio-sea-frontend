import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './src/components/home/index'
import Setor from './src/components/setor';

function Rotas() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/setor" component={Setor} />
      </Switch>
    </Router>
  );
}
export default Rotas;