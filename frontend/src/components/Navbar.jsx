import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { label: 'Home', path: '/', exact: true },
    { label: 'Our Packages', path: '/packages' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">A-EVENTS</h1>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.exact}
                className={({ isActive }) =>
                  `relative pb-1 transition-all duration-300 ease-in-out
                   ${
                     isActive
                       ? 'after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-yellow-300 text-yellow-300 font-semibold'
                       : 'text-white hover:text-yellow-300 after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-yellow-300 after:transition-all after:duration-300'
                   }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
