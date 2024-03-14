import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NAVBAR_ROUTES } from './navdata.js';
import { FaTwitter, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { Logo } from '../assets/index';
import { PatternCircle } from '../assets/index';

const Footer = () => {
  return (
    <Wrapper className="footer">
      <div className="logo-container">
        <Link to="./" className="logo">
          <img className="navlink" src={Logo} alt="Payapi Home" />
        </Link>
      </div>
      <div className="links-container">
      <ul className="links">
        {NAVBAR_ROUTES.map(({ exact, path, name }) => {
          return (
            <li key={name}>
              <Link className="link-text" to={path}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>

      <div className="social-links">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Facebook"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Linkedin"
        >
          <FaLinkedin />
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: url(${PatternCircle}) 50% 185px no-repeat,
    hsl(var(--clr-mirage-blue));
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.563rem 0 3.438rem;

  .logo-container {
    img {
      filter: brightness(0%) invert(1);
      width: 100%;
    }
  }

  .links-container {
  .links {
    display: flex;
    flex-direction: column;
    margin: 2.5rem 0;
    padding: 0;
    gap: 2.5rem;

    li {
      list-style: none; /* Verwijder standaard lijst opmaak */
    }

    .link-text {
      color: hsl(var(--clr-link-water-white));
      text-decoration: none; /* Voeg onderstreping toe als gewenst */
      cursor: pointer;
    }
  }
}

  .social-links {
    a {
      color: hsl(var(--clr-link-water-white));
      font-size: 1.5rem;
      padding-inline: 0.75rem;
      transition: var(--transition);
      @media (hover: hover) and (pointer: fine) {
        :hover {
          color: hsl(var(--clr-charm-pink));
        }
      }
    }
  }

  @media (min-width: 768px) {
    height: 6.25rem;
    background-position: calc(100% + 400px) calc(100% + 520px);
    flex-direction: row;
    justify-content: flex-start;
    gap: 4rem;
    padding: 0 2.5rem;
    width: 100%;

    .links-container {
      .links {
        flex-direction: row;
      }
    }

    .social-links {
      margin-left: auto;
    }
  }
  @media (min-width: 1200px) {
    background-position: calc(100% + 380px) calc(100% + 550px);
    padding-inline: 10.313rem;
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export default Footer;
