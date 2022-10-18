import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Form from '../components/Form/Form';
import {
  Tesla,
  Microsoft,
  HewlettPackard,
  Oracle,
  Google,
  Nvidia,
  PatternCircle,
} from '../assets/index.js';
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

const Contact = () => {
  return (
    <Wrapper>
      <Navbar />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <section className="contact">
          <h1 className="heading-one-small contact-header">
            Submit a help request and we’ll get in touch shortly.{' '}
          </h1>
          <div className="submit-form">
            <Form />
            <div className="companies-involved">
              <h2>Join the thousands of innovators already building with us</h2>
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
  .contact {
    padding-inline: 1.5rem;
    .contact-header {
      margin: 3rem auto 1rem;
      max-width: 20ch;
    }
    h2 {
      font-family: 'DM Serif Display';
      font-size: 1.5rem;
      line-height: 32px;
      letter-spacing: -0.184615px;
      color: hsl(var(--clr-san-juan-blue));
      mix-blend-mode: normal;
      opacity: 0.75;
      margin: 5rem auto 2rem;
      max-width: 38ch;
    }
  }

  .submit-form {
    margin-bottom: 5rem;
  }

  .company-logos {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 2.5rem 1.5rem;

    .company {
      margin: auto;
    }
  }
  @media (min-width: 768px) {
    background-position: 505px -464px;
    .contact {
      .contact-header {
        margin: 4.688rem auto 1.875rem;
      }

      h2 {
        margin: 4rem auto 2.5rem;
      }
    }

    .submit-form {
      margin-bottom: 6.25rem;
    }

    .company-logos {
      padding-inline: 4.938rem;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 2.875rem 3.75rem;
    }
  }

  @media (min-width: 1200px) {
    max-width: 1440px;
    margin: 0 auto;
    background-position: 800px -527px;
    .contact {
      padding-inline: 10.313rem;
      .contact-header {
        text-align: left;
        margin: 5.125rem auto 2.625rem 0rem;
        max-width: 26ch;
      }
      h2 {
        text-align: left;
        margin: 8.5rem auto 2.5rem 0;
      }
    }

    .submit-form {
      display: grid;
      grid-auto-columns: 1fr;
      grid-template-columns: 1fr 1fr;

      gap: 0 1.75rem;
      margin-bottom: 5.813rem;
    }
    .company-logos {
      padding-inline: 0;
    }
  }
`;

export default Contact;
