// Layout.js

import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/quadratic">Quadratic</Link>
        </li>
        <li>
          <Link to = "/rref">RREF</Link>
        </li>
        <li>
          <Link to = "/calc1"> Calc 1</Link>
        </li>
        <li>
          <Link to = "/logic"> Logic</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Layout;
