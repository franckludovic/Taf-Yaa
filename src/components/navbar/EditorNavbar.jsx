import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Row from '../../layout/containers/Row';
import ImageCard from '../../layout/containers/ImageCard';
import Text from '../Text';
import { CircleUser, Menu, X, EarthIcon, ChevronDown, Bell  } from 'lucide-react';
import Card from '../../layout/containers/Card';
import '../../styles/Navbar.css';

export default function ViewerNavbar() {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSubmenu = () => setSubmenuOpen(prev => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navItems = [
    { label: 'Tree View', href: '#content' },
    { label: 'My Stories', href: '#content' },
    { label: 'My Family', href: '#content' },
    { label: 'Suggestions', href: '#content' },
    { label: 'Export', href: '#content' },
  ];

  const MobileNavItems = [
    { label: 'Tree View', href: '#content' },
    { label: 'My Stories', href: '#content' },
    { label: 'My Family', href: '#content' },
    { label: 'Suggestions', href: '#content' },
    { label: 'Notification', href: '#content' },
    { label: 'Export', href: '#content' },
    { label: 'Language', href: '#content' },
    
  ];

  return (
    <nav className='NavBar'>
      {/* Logo Section */}
      <Row fitContent justifyContent='start' padding='0px' margin='0px'>
        <ImageCard image='/Images/Logo.png' size={45} rounded margin='0px' />
        <Text variant='heading2'>Taf'Yaa</Text>
      </Row>

      {/* Desktop Nav */}
      <div className="desktop-nav">
          <Row width='700px' fitContent={true} gap='1rem' justifyContent='end' padding='0px' margin='0px'>
          {navItems.map((item) => (
            <Text key={item.label} className='navItem' as='a' variant='body1' bold href={item.href}>
              {item.label}
            </Text>
          ))}

          <Card
            fitContent
            size={30}
            padding='3px'
            margin='5px'
            backgroundColor="var(--color-gray)"
            style={{ cursor: 'pointer' }}
          >
            <Row fitContent={true} gap='0.25rem' padding='0px' margin='0px'>
              <EarthIcon size={25} color="var(--color-primary-text)" />
              <ChevronDown onClick={() => {alert("hello boy")}} color='var(--color-primary-text)' />
            </Row>
          </Card>

           <Card
            fitContent
            size={25}
            onClick={toggleSubmenu}
            padding='3px'
            margin='2px'
            backgroundColor="var(--color-gray)"
            style={{ cursor: 'pointer' }}
          >
            <Bell  size={25} color="var(--color-primary-text)" />
          </Card>

          <Card
            fitContent
            rounded
            size={40}
            onClick={toggleSubmenu}
            padding='0px'
            margin='5px'
            backgroundColor="var(--color-transparent)"
            style={{ cursor: 'pointer' }}
          >
            <CircleUser size={35} color="var(--color-primary-text)" />
          </Card>
        </Row>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-button"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && ReactDOM.createPortal(
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            {MobileNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-nav-item"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>,
        document.body
      )}

      {/* Submenu Portal */}
      {submenuOpen && ReactDOM.createPortal(
        <div className="submenu">
          <Card margin='0.25rem' height='30px' padding='0.5rem 1rem' className='submenuItem'>
            <Text as='a' href="/#">Profile</Text>
          </Card>
          <Card margin='0.25rem' height='30px' padding='0.5rem 1rem' className='submenuItem'>
            <Text as='a' href="/#">Settings</Text>
          </Card>
          <Card margin='0.25rem' height='30px' padding='0.5rem 1rem' className='submenuItem'>
            <Text as='a' href="/#">Log Out</Text>
          </Card>
        </div>,
        document.body
      )}
    </nav>
  );
}
