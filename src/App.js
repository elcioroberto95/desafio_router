import react from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Produtos from './Components/Produtos';

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
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
