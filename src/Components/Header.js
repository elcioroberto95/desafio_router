import react from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato">Contato</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
