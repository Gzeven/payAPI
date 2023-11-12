import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { IconCheck, PatternCircle } from '../assets';
import ScheduleDemoForm from '../components/ScheduleDemoForm';

const containerVariants = {
  hidden: { opacity: 0, x: '100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'tween', delay: 0.3 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const Pricing = () => {
  return (
    <Wrapper>
      <Navbar />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <section className="pricing">
          <h1 className="heading-one-small"> Pricing </h1>
          <div className="plans">
            <div className="plan">
              <h2 className="heading-three-small">Free Plan</h2>
              <p>
                Build and test using our core set of products with up to 100 API
                requests
              </p>
              <h3 className="price"> $0.00</h3>

              <div className="underline" />
              <ul>
                <li>
                  <span>Transactions</span>
                </li>
                <li>
                  <span>Auth</span>
                </li>
                <li>
                  <span>Identity</span>
                </li>
                <li className="no-check">
                  <span>Investments</span>
                </li>
                <li className="no-check">
                  <span>Assets</span>
                </li>
                <li className="no-check">
                  <span>Liabilities</span>
                </li>
                <li className="no-check">
                  <span>Income</span>
                </li>
              </ul>
              <div className="underline" />
              <Link to="/contact">
                <button className="request-button">Request Access</button>
              </Link>
            </div>

            <div className="plan">
              <h2 className="heading-three-small">Basic Plan</h2>
              <p>
                Launch your project with unlimited requests and no contractual
                minimums
              </p>
              <h3 className="price">$249.00</h3>
              <div className="underline" />
              <ul>
                <li>
                  <span>Transactions</span>
                </li>
                <li>
                  <span>Auth</span>
                </li>
                <li>
                  <span>Identity</span>
                </li>
                <li>
                  <span>Investments</span>
                </li>
                <li>
                  <span>Assets</span>
                </li>
                <li className="no-check">
                  <span>Liabilities</span>
                </li>
                <li className="no-check">
                  <span>Income</span>
                </li>
              </ul>
              <div className="underline" />
              <Link to="/contact">
                <button className="request-button">Request Access</button>
              </Link>
            </div>

            <div className="plan">
              <h2 className="heading-three-small">Premium Plan</h2>
              <p>
                Get tailored solutions, volume pricing, and dedicated support
                for your team
              </p>
              <h3 className="price">$499.00</h3>
              <div className="underline" />
              <ul>
                <li>
                  <span>Transactions</span>
                </li>
                <li>
                  <span>Auth</span>
                </li>
                <li>
                  <span>Identity</span>
                </li>
                <li>
                  <span>Investments</span>
                </li>
                <li>
                  <span>Assets</span>
                </li>
                <li>
                  <span>Liabilities</span>
                </li>
                <li>
                  <span>Income</span>
                </li>
              </ul>
              <div className="underline" />
              <Link to="/contact">
                <button className="request-button">Request Access</button>
              </Link>
            </div>
          </div>
        </section>
        <ScheduleDemoForm />
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled(motion.section)`
  text-align: center;
  background: url(${PatternCircle}) 74px -644px no-repeat,
    hsl(var(--clr-link-water-white));
  .pricing {
    margin: 3rem 0 5rem;
  }
  .plans {
    padding-inline: 1.5rem;
  }
  .plan {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 3rem;

    p {
      margin: 1rem auto 1.5rem;
    }

    .price {
      font-family: 'DM Serif Display';
      font-size: 3.5rem;
      line-height: 72px;
      letter-spacing: -0.430769px;
      color: hsl(var(--clr-san-juan-blue));
    }
    .underline {
      background-color: hsl(var(--clr-san-juan-blue));
      height: 1px;
      width: 100%;
      opacity: 0.25;
      margin: 1.5rem 0;
    }
    ul {
      list-style-image: url(${IconCheck});

      text-align: left;
      margin: auto;

      li {
        color: hsl(var(--clr-san-juan-blue));
        margin-top: 0.5rem;
        margin-right: 2.5rem;
        font-family: 'Public Sans';
        line-height: 28px;
      }
      li:first-child {
        margin-top: 0;
      }
      span {
        position: relative;
        left: 1rem;
      }
    }
    .no-check {
      list-style-image: none;
      opacity: 0.5;
    }
    .request-button {
      background-color: transparent;
      color: hsl(var(--clr-san-juan-blue));
      font-family: 'Public Sans';
      font-weight: 700;
      border-radius: 24px;
      height: 3rem;
      width: 10.5rem;
      cursor: pointer;
      border: 1px solid hsl(var(--clr-san-juan-blue));
      outline: none;
      transition: all 0.6s;
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background-color: hsl(var(--clr-san-juan-blue));
          color: hsl(var(--clr-link-water-white));
        }
      }
    }
  }

  @media (min-width: 768px) {
    background-position: 505px -464px;

    .pricing {
      margin: 4.75rem 0 5rem;
    }

    .plans {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      gap: 0.625rem;
    }
    .plan {
      margin-top: 4.313rem;
      p {
        max-width: 24ch;
      }
    }
  }

  @media (min-width: 1200px) {
    background-position: 800px -527px;
    text-align: left;
    max-width: 1440px;
    margin: 0 auto;
    .pricing {
      padding-inline: 10.313rem;
    }

    .plans {
      gap: 1.875rem;
      padding: 0;
    }
    .plan {
      margin-top: 4.5rem;

      p {
        margin: 1rem auto 1.5rem 0;
        max-width: 38ch;
      }

      ul {
        margin-left: 1.25rem;
        padding: 0;
      }
    }
  }
`;

export default Pricing;
