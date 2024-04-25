import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'About',
            link: '/about',
        },
        {
            name: 'Support',
            link: '/support',
        },
    ];

    return (
        <nav className="nav">
            <ul className="navbar">
                {navItems.map((item) => (
                    <li className="navbar-item" key={item.name}>
                        <Link to={item.link} className="navbar-link">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
