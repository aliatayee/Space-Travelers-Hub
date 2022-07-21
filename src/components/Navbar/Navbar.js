import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FiAlignRight } from 'react-icons/fi';
import Logo from '../../assets/icons/saturn.png';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const links = [
    {
      id: 1,
      path: '/',
      name: 'Rockets',
    },
    {
      id: 2,
      path: 'missions',
      name: 'Missions',
    },
    {
      id: 3,
      path: 'myprofile',
      name: 'My Profile',
    },
  ];
  return (
    <>
      <div className="navBg" />
      <nav className="relative flex flex-wrap bg-white items-center border-b border-slate-200 justify-between px-2  mb-3 nav-layout">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto items-center lg:static lg:block lg:justify-start">
            <a
              className="font-bold leading-relaxed flex items-center mr-4 py-2 whitespace-nowrap text-blue-500 text-2xl"
              href="/"
            >
              <img src={Logo} alt="logo" className="w-12" />
              <span>Space Travelers&apos; Hub</span>
            </a>
            <button
              className="text-blue-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FiAlignRight />
            </button>
          </div>
          <div
            className={
                            `lg:flex flex-grow justify-between lg:justify-end items-center${navbarOpen ? ' flex' : ' hidden'}`
                        }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none ">

              {links.map((link) => (
                <li key={link.id} className="nav-item  px-3 py-2 font-mono flex items-center text-gray-400 text-lg hover:opacity-75">
                  <NavLink to={link.path} className={({ isActive }) => (isActive ? 'active-link' : 'link-text')}>{link.name}</NavLink>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
