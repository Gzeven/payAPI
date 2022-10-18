import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import ScheduleDemoForm from '../components/ScheduleDemoForm';
import {
  TeamMembersMobile,
  TeamMembersTablet,
  TeamMembersDesktop,
  PatternCircle,
} from '../assets';

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

const About = () => {
  return (
    <Wrapper>
      <Navbar />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <section className="about">
          <h1 className="heading-one-small">
            We empower innovators by delivering access to the financial system
          </h1>
          <div className="about-info">
            <div className="about-text">
              <h2 className="heading-three-large">Our Vision</h2>
              <p>
                Our main goal is to build beautiful consumer experiences along
                with developer-friendly infrastructure. The result is an
                intelligent tool that gives everyone the ability to create
                amazing products that solve big problems. We are deeply focused
                on democratizing financial services through technology.
              </p>
            </div>
            <div className="about-text">
              <h2 className="heading-three-large">Our Business </h2>
              <p>
                At the core of our platform is the technical infrastructure APIs
                that connect consumers. Our innovative product provides key
                insights for businesses and individuals, as well as robust
                reporting for traditional financial institutions and developers.
              </p>
            </div>
          </div>
        </section>
        <div className="team-image"></div>
        <section className="team">
          <div>
            <div className="underline-top" />
            <p className="team-text">Team Members</p>
            <p className="team-numbers">300+ </p>
            <div className="underline" />
          </div>
          <div>
            <div className="underline" />
            <p className="team-text"> Offices in the US</p>
            <p className="team-numbers">3</p>
            <div className="underline" />
          </div>
          <div>
            <div className="underline" />
            <p className="team-text">Transactions analyzed </p>
            <p className="team-numbers">10M+</p>
            <div className="underline-bottom" />
          </div>
        </section>
        <section className="about  about-two">
          <div className="about-info">
            <div className="about-text">
              <h2 className="heading-three-large">The Culture</h2>
              <p>
                We strongly believe there's always an opportunity to learn from
                each other outside of day-to-day work, whether it's company-wide
                offsites, internal hackathons, or co-worker meetups. We always
                value cross-team collaboration and diversity of thought, no
                matter the job title.
              </p>
            </div>
            <div className="about-text">
              <h2 className="heading-three-large">The People</h2>
              <p>
                We're all passionate about building a more efficient and
                inclusive financial infrastructure together. At PayAPI, we have
                diverse backgrounds and skills.
              </p>
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
  .about {
    padding-inline: 1.5rem;

    .about-info {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      margin: 3rem 0;
    }
    h1 {
      margin: 3rem auto 0;
      max-width: 24ch;
    }
    h2 {
      margin-bottom: 1rem;
    }
    p {
      max-width: 35ch;
      margin: 0 auto;
    }
  }

  .team-image {
    background-image: url(${TeamMembersMobile});
    width: 100%;
    height: 300px;
    background-size: cover;
    margin: 4.75rem auto 3rem;
  }

  .team {
    padding-inline: 1.5rem;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: 1fr;
    gap: 2rem;

    .team-numbers {
      font-family: var(--ff-serif);
      font-size: 3.5rem;
      line-height: 72px;
      text-align: center;
      letter-spacing: -0.430769px;
      color: hsl(var(--clr-charm-pink));
    }

    .underline {
    }
    .underline-top,
    .underline-bottom {
      background: hsl(var(--clr-san-juan-blue));
      height: 1px;
      width: 100%;
      opacity: 0.25;
    }
    .underline-top {
      margin-bottom: 1rem;
    }
    .underline-bottom {
      margin-top: 1rem;
    }
  }

  @media (min-width: 768px) {
    background-position: 505px -464px;
    .about {
      padding-inline: 2.438rem;
      h1 {
        margin: 4rem auto 0;
        max-width: 23ch;
      }
      .about-info {
        gap: 4rem;
        .about-text {
          display: flex;
          text-align: left;
          justify-content: space-between;
        }

        p {
          max-width: 50ch;

          margin: 0;
        }
      }
    }

    .team-image {
      background-image: url(${TeamMembersTablet});
      width: 100%;
      height: 267px;
      background-size: cover;
      margin: 5.75rem auto 4rem;
    }

    .team {
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      gap: 0.625rem;
      text-align: left;
      margin-bottom: 4rem;
      padding-inline: 2.438rem;
      .team-text {
        margin-top: 1rem;
      }
      .team-numbers {
        text-align: left;
        margin-bottom: 1rem;
      }

      .underline {
        background: hsl(var(--clr-san-juan-blue));
        height: 1px;
        width: 100%;
        opacity: 0.25;
      }
      .underline-top,
      .underline-top {
        margin: 0;
      }
      .underline-bottom {
        margin: 0;
      }
    }
    .about-two {
      margin-bottom: 4.5rem;
    }
  }

  @media (min-width: 1200px) {
    text-align: left;
    max-width: 1440px;
    margin: 0 auto;
    background-position: -523px 612px;
    .about {
      padding-inline: 16.25rem;
      h1 {
        margin: 4.5rem auto 3.5rem 0;
      }

      .about-info {
        p {
          max-width: 69ch;
          width: 70%;
        }
      }
    }

    .team-image {
      background-image: url(${TeamMembersDesktop});
      width: 100%;
      height: 500px;
      background-size: cover;
      margin: 6.25rem auto 4.5rem;
    }

    .team {
      gap: 1.875rem;

      padding-inline: 10.313rem;
    }
    .about-two {
      margin-bottom: 8.125rem;
    }
  }
`;

export default About;
