import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const { name, path } = props;
    return (
        <div>
            <li className='nav-item'>
                <Link to={path} className='nav-link'>
                    {name}
                </Link>
            </li>
            </div>
    );
};


function Nav() {
    const pages = [
        { name: 'Accueil', path: '/' },
        { name: 'Contact', path: '/contact' },
        { name: 'A propos', path: '/about' },
        { name: 'Panier', path: '/cart' },
        { name: 'Connexion', path: '/login' },
        { name: 'Profil', path: '/me' },
        { name: 'Mes commandes', path: '/myOrders' },
    ];
    const bugers = useSelector((state) => state.burgerReducer.burgers);

    const cartCount = bugers.length;

    return (
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#9C003C", paddingLeft: "80px" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <IoFastFoodOutline style={{ fontSize: "30px", color: "white" }} />
          </Link>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav w-100">
              {pages.map((item, index) => (
                <NavItem key={index} name={item.name} path={item.path} />
              ))}

              <div className="ms-auto row">
                <div className="menu-right">
                  <Link to="/cart">
                    <i class="fas fa-shopping-bag fa-2x grey"></i>
                    <span class="badge badge-pill badge-success">
                      {cartCount}
                    </span>
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
    </div>
);

};


export default NavBar;
