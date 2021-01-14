import react from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav className={styles.header}>
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
