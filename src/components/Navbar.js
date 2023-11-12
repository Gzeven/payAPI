import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo } from '../assets/index';
import { Link, useLocation } from 'react-router-dom';
import { NAVBAR_ROUTES } from './navdata.js';
import { PrimaryButton } from './PrimaryButton';
import { PatternCircle } from '../assets/index';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  return (
    <NavContainer className="primary-header flex">
      <div className="logo-container">
        <Link to="/" className="logo">
          <img className="navlink" src={Logo} alt="Payapi Home"></img>
        </Link>
      </div>
      <button
        onClick={() => setShowLinks(!showLinks)}
        className={
          showLinks
            ? 'change menu-bars mobile-nav-toggle close-mobile'
            : 'menu-bars mobile-nav-toggle'
        }
        aria-controls="primary-navigation"
        aria-expanded={showLinks}
      >
        <span className="sr-only">Menu</span>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>
      <nav
        className={
          showLinks
            ? 'primary-navigation nav-indicators'
            : ' close-primary-navigation primary-navigation nav-indicators'
        }
        id="primary-navigation"
      >
        <ul>
          <div className="divider"></div>
          {NAVBAR_ROUTES.map(({ exact, path, name, classname }) => {
            return (
              <Link
                to={path}
                className={splitLocation[1] === classname ? 'active' : ''}
                key={name}
              >
                <button
                  className="navlink  navtext"
                  exact={`${exact}`}
                  onClick={() => setShowLinks(!showLinks)}
                >
                  {name}
                </button>
              </Link>
            );
          })}
        </ul>
        <PrimaryButton
          bgcolor="hsl(var(--clr-pink))"
          color="hsl(var(--clr-link-water-white))"
          hovercolor="hsl(var(--clr-charm-pink))"
          className="nav-demo-button"
          href="#demo"
        >
          Schedule a Demo
        </PrimaryButton>
      </nav>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  padding-top: 2.5rem;

  .logo-container {
    padding-inline-start: 1.5rem;
  }

  .primary-navigation {
    position: fixed;
    background: url(${PatternCircle}), hsl(var(--clr-mirage-blue));
    background-repeat: no-repeat;
    background-position: 60% 227%;
    z-index: 1000;
    inset: 0 0 0 20%;
    padding-inline: 1.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    transition: transform 500ms ease-in-out;

    ul {
      display: flex;
      flex-direction: column;
      padding: 5.938rem 0 0;
      margin: 0;
    }

    .navlink {
      cursor: pointer;
      border: none;
      background: transparent;
      padding: 1rem;
      transition: var(--transition);
      color: hsl(var(--clr-link-water-white));
      opacity: 0.7;
      @media (hover: hover) and (pointer: fine) {
        :hover {
          opacity: 1;
        }
      }
    }
    .divider {
      border-top: 1px solid hsl(var(--clr-link-water-white));
      opacity: 0.15;
      margin-bottom: 1.5rem;
    }
  }

  .mobile-nav-toggle {
    display: block;
    position: absolute;
    z-index: 2000;
    right: 1.5rem;
    top: 2.938rem;
    background: transparent;
    border: 0;
    cursor: pointer;
    .bar1,
    .bar2,
    .bar3 {
      width: 1.75rem;
      height: 3px;
      background: hsl(var(--clr-san-juan-blue));
      margin: 4px 0;
      transition: var(--transition);
    }
  }
  .close-primary-navigation {
    transform: translateX(100%);
  }
  .change {
    .bar1 {
      transform: rotate(-45deg) translate(-2px, 8px);
      background: hsl(var(--clr-link-water-white));
    }
    .bar2 {
      opacity: 0;
    }
    .bar3 {
      transform: rotate(45deg) translate(-2px, -8px);
      background: hsl(var(--clr-link-water-white));
    }
  }
  @media (min-width: 768px) {
    display: flex;

    align-items: center;
    padding-inline: 2.438rem;

    .logo-container {
      padding: 0;
    }

    .primary-navigation {
      flex-grow: 1;
      transform: translateX(0);
      inset: 0;
      position: relative;

      padding: 0;

      background: transparent;
      flex-direction: row;

      margin-left: 4rem;
      justify-content: space-between;
      align-items: center;
      ul {
        padding: 0;

        flex-direction: row;
        gap: 2.5rem;
      }

      .divider {
        display: none;
      }
      .navlink {
        padding: 0;
        color: hsl(var(--clr-san-juan-blue));
      }
    }

    .mobile-nav-toggle {
      display: none;
    }
  }
  @media (min-width: 1200px) {
    padding-inline: 10.313rem;
  }
`;

export default Navbar;
