import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu, X } from 'lucide-react'; // install lucide-react or use any icon lib

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ];

  return (
    <header className='bg-white/70 shadow-lg px-6 py-2 mt-2 rounded-xl'>
      <Container>
        <nav className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center gap-2'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>

          {/* Add Post button on mobile navbar if authenticated and menu is closed */}
          {authStatus && !mobileMenuOpen && (
            <button
              onClick={() => navigate('/add-post')}
              className='sm:hidden px-4 py-2 rounded-full bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 transition'
            >
              Add Post
            </button>
          )}

          {/* Hamburger */}
          <div className='sm:hidden'>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='text-gray-800 focus:outline-none'
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <ul className='hidden sm:flex items-center gap-4 ml-auto'>
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='px-4 py-2 rounded-full bg-white/80 text-gray-800 font-semibold shadow-md hover:bg-blue-500 hover:text-white transition'
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <ul className='sm:hidden mt-4 flex flex-col gap-3'>
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        navigate(item.slug);
                        setMobileMenuOpen(false);
                      }}
                      className='w-full text-left px-4 py-2 rounded-md bg-white/90 text-gray-800 font-medium shadow hover:bg-blue-500 hover:text-white transition'
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        )}
      </Container>
    </header>
  );
}

export default Header;
