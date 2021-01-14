import react from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Produtos from './Components/Produtos';
import Produto from './Components/Produto';
import Head from './Components/Head';
import Header from './Components/Header';
import Contato from './Components/Contato';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Head />
        <Header />
        <Switch>
          <Route exact path="/">
            <Produtos />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
          <Route path="/produto/:id">
            <Produto />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
