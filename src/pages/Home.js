import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import {
  PatternCircle,
  PhoneMockup,
  Tesla,
  Microsoft,
  HewlettPackard,
  Oracle,
  Google,
  Nvidia,
  EasyToImplement,
  SimpleUI,
  BankingAndCoverage,
  ConsumerPayments,
  PersonalFinances,
} from '../assets';
import EmailForm from '../components/Form/EmailForm';
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

const Home = () => {
  return (
    <Wrapper>
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>
      <Navbar />
      <motion.div
        id="main"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <section className="intro">
          <div className="phone-mockup-image">
            <img src={PhoneMockup} alt="" />
          </div>

          <div className="intro-text">
            <h1 className="heading-one-large">
              Start building with our APIs for absolutely free.
            </h1>
            <EmailForm className="email-form" />
            <p className="questions">
              Have any questions?
              <span> Contact Us </span>
            </p>
          </div>
        </section>
        <section className="companies">
          <div className="company-logos">
            <div className="company">
              <img src={Tesla} alt="Tesla" />
            </div>
            <div className="company">
              <img src={Microsoft} alt="Microsoft" />
            </div>
            <div className="company">
              <img src={HewlettPackard} alt="Hewlett Packard" />
            </div>
            <div className="company">
              <img src={Oracle} alt="Oracle" />
            </div>
            <div className="company">
              <img src={Google} alt="Google" />
            </div>
            <div className="company">
              <img src={Nvidia} alt="Nvidia" />
            </div>
          </div>
          <div className="companies-info">
            <h2 className="heading-two-small">Who we work with</h2>
            <p>
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </p>
            <Link to="/about">
              <button>About Us</button>
            </Link>
          </div>
        </section>
        <div className="image-background">
          <section className="easy-and-simple">
            <div className="easy-to-implement">
              <div className="easy-to-implement-image">
                <img src={EasyToImplement} alt="" />
              </div>

              <div className="easy-to-implement-text">
                <h2 className="heading-two-large">Easy to implement</h2>
                <p>
                  Our API comes with just a few lines of code. You’ll be up and
                  running in no time. We built our documentation page to
                  integrate payments functionality with ease.
                </p>
              </div>
            </div>
            <div className="simple-ui">
              <div className="simple-ui-image">
                <img src={SimpleUI} alt="" />
              </div>
              <div className="simple-ui-text">
                <h2 className="heading-two-large"> Simple UI & UX</h2>
                <p>
                  Our pre-built form is easy to integrate in your app or
                  website’s checkout flow and designed to optimize conversion.
                </p>
              </div>
            </div>
          </section>
          <section className="advantages">
            <div className="advantage">
              <img src={PersonalFinances} alt="" />
              <h3 className="heading-four">Personal Finances </h3>
              <p>
                Consolidate financial data from multiple sources and categorize
                transactions up to 2 years of history. Analyze reports to
                reconcile activities in your account.
              </p>
            </div>
            <div className="advantage">
              <img src={BankingAndCoverage} alt="" />
              <h3 className="heading-four">Banking & Coverage</h3>
              <p>
                With our platform, you can speed up account onboarding and
                support ongoing payments for checking, savings, credit card, and
                brokerage accounts.
              </p>
            </div>
            <div className="advantage">
              <img src={ConsumerPayments} alt="" />

              <h3 className="heading-four">Consumer Payments</h3>
              <p>
                It’s easier to set up secure bank payments with us through a
                flow designed with the user experience in mind. Customers could
                instantly authenticate their account.
              </p>
            </div>
          </section>
        </div>
        <ScheduleDemoForm />
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled(motion.section)`
  background: url(${PatternCircle}) 50% -540px no-repeat,
    hsl(var(--clr-link-water-white));

  .skip-to-content {
    position: absolute;
    z-index: 9999;
    background: hsl(var(--clr-white));
    color: hsl(var(--clr-dark));
    padding: 0.5em 1em;
    margin-inline: auto;
    transform: translateY(-100%);
    transition: transform 250ms ease-in-out;
    :focus {
      transform: translateY(0);
    }
  }

  .intro {
    padding-inline: 1.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-left: 1.5rem;
      width: 14rem;
    }
    h1 {
      margin: -2rem 0 1.5rem;
      max-width: 20ch;
    }
    .questions {
      margin-top: 1.5rem;
      span {
        font-weight: bold;
      }
    }
  }

  .companies {
    background: url(${PatternCircle}) 50% -585px no-repeat,
      hsl(var(--clr-mirage-blue));
    text-align: center;
    padding: 5rem 1.5rem;
    margin-top: 5rem;
    .company-logos {
      display: grid;
      grid-auto-columns: 1fr;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 2.5rem 1.5rem;
      margin-bottom: 3.5rem;

      .company {
        margin: auto;
        img {
          filter: brightness(0%) invert(1);
          margin: 0 auto;
        }
      }
    }
    .companies-info {
      h2 {
        margin-bottom: 1rem;
      }
      p {
        max-width: 38ch;
        margin: 0 auto;
        color: hsl(var(--clr-link-water-white));
        opacity: 0.7;
      }
      button {
        background-color: transparent;
        color: hsl(var(--clr-link-water-white));
        font-family: 'Public Sans';
        font-weight: 700;
        border-radius: 24px;
        height: 3rem;
        width: 8rem;
        cursor: pointer;
        border: 1px solid hsl(var(--clr-link-water-white));
        outline: none;
        transition: all 0.6s;
        margin-top: 3.75rem;
        &:hover {
          background-color: hsl(var(--clr-link-water-white));
          color: hsl(var(--clr-mirage-blue));
        }
      }
    }
  }

  .easy-and-simple {
    text-align: center;
    margin-top: 2rem;

    h2 {
      margin-bottom: 1.5rem;
    }
    p {
      max-width: 36ch;
    }

    .easy-to-implement {
      display: flex;
      flex-direction: column;
      align-items: center;
      .easy-to-implement-image {
        margin-left: 3.25rem;
      }
      .easy-to-implement-text {
        margin-top: -1rem;
      }
    }
    .simple-ui {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 4rem;
      .simple-ui-image {
        margin-left: 1.5rem;
        margin-top: -0.5rem;
      }
    }
  }

  .advantages {
    display: grid;
    gap: 3rem 0;
    margin: 5rem 0;

    text-align: center;
    .advantage {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 106px;
        margin-bottom: 2rem;
      }
      h3 {
        margin-bottom: 1rem;
      }
      p {
        max-width: 36ch;
      }
    }
  }

  @media (min-width: 768px) {
    background: url(${PatternCircle}) 50% -663px/949px 949px no-repeat,
      hsl(var(--clr-link-water-white));

    .intro {
      padding-top: 3.5rem;
      padding-inline: 2.438rem;
      img {
        width: 12rem;
      }
      h1 {
        max-width: 22ch;
        margin: 0 auto;
        padding-bottom: 2rem;
      }
      .questions {
        margin-top: 1rem;
      }
    }

    .companies {
      background-position: 50% -543px;
      padding: 5.5rem 7.25rem;
      margin-top: 6.25rem;
      .company-logos {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 2.5rem 3.75rem;
      }
      .companies-info {
        p {
          max-width: 52ch;
        }
        button {
          margin-top: 2rem;
        }
      }
    }

    .easy-and-simple {
      margin-top: 3.5rem;
      .easy-to-implement {
        .easy-to-implement-text {
          margin-top: -4rem;
        }
      }
      .simple-ui {
        margin-top: 3.25rem;
        .simple-ui-image {
          margin-left: 1.5rem;
          margin-top: -0.5rem;
        }
        .simple-ui-text {
          margin-top: -4rem;
        }
      }

      p {
        max-width: 65ch;
      }
    }

    .advantages {
      grid-auto-flow: column;
      grid-auto-columns: 1fr;

      padding-inline: 2.5rem;
      margin: 6.25rem 0;

      .advantage {
        justify-content: stretch;

        img {
          width: 88px;
        }
        p {
          max-width: 24.5ch;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    background: url(${PatternCircle}) 120% -180px no-repeat,
      hsl(var(--clr-link-water-white));

    max-width: 1440px;
    margin: 0 auto;

    .intro {
      flex-direction: row-reverse;
      justify-content: space-between;
      text-align: left;
      padding-inline: 10.313rem;
      padding-top: 1.125rem;
      img {
        width: 26rem;
      }
      h1 {
        max-width: 15ch;
        margin-bottom: 1.5rem;
      }
      .questions {
        margin-left: 1.688rem;
      }
    }

    .companies {
      background: url(${PatternCircle}) -235px -359px no-repeat,
        hsl(var(--clr-mirage-blue));
      padding: 6.25rem 10.313rem;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      margin-top: 0;
      .company-logos {
        margin-top: 3rem;
      }
      .companies-info {
        h2 {
          margin-bottom: 1.5rem;
        }
      }
    }

    .image-background {
      background: url(${PatternCircle}) calc(100% + 350px) calc(100% - 290px)
          no-repeat,
        hsl(var(--clr-link-water-white));
    }

    .easy-and-simple {
      margin-top: 6.5rem;
      padding-inline: 10.313rem;
      text-align: left;
      gap: 2rem;

      .easy-to-implement {
        flex-direction: row;

        .easy-to-implement-text {
          p {
            max-width: 48ch;
          }
        }
        img {
        }
        margin-left: -6.25rem;
      }
      .simple-ui {
        flex-direction: row-reverse;
        justify-content: space-between;
        padding-bottom: 4.5rem;
        .simple-ui-text {
          margin-top: 0;
          p {
            max-width: 48ch;
          }
        }

        img {
          margin-right: -5.5rem;
        }
      }
    }

    .advantages {
      padding-inline: 10.313rem;
      margin: 0 auto 6.25rem;
      .advantage {
        img {
          width: 106px;
        }
        p {
          max-width: 38ch;
        }
      }
    }
  }
`;

export default Home;
