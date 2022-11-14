// import React from 'react';
// import { motion } from 'framer-motion';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { Wrong } from '../assets';

// const containerVariants = {
//   hidden: { opacity: 0, x: '100vw' },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { type: 'tween', delay: 0.3 },
//   },
//   exit: {
//     x: '-100vw',
//     transition: { ease: 'easeInOut' },
//   },
// };

// const Error = () => {
//   return (
//     <Wrapper
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       exit="exit"
//     >
//       <h1 className="heading-one-small">Page not found</h1>
//       <Link to="/">
//         <button className="back-button">Home</button>
//       </Link>
//     </Wrapper>
//   );
// };

// const Wrapper = styled(motion.section)`
//   background: url(${Wrong}) -150px 0px no-repeat,
//     hsl(var(--clr-link-water-white));
//   background-size: cover;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   max-width: 1440px;
//   margin: 0 auto;

//   .back-button {
//     background-color: hsl(var(--clr-san-juan-blue));
//     color: hsl(var(--clr-link-water-white));
//     font-family: 'Public Sans';
//     font-weight: 700;
//     border-radius: 24px;
//     height: 3rem;
//     width: 10.5rem;
//     cursor: pointer;
//     border: 1px solid hsl(var(--clr-san-juan-blue));
//     outline: none;
//     transition: all 0.6s;

//     &:hover {
//       color: hsl(var(--clr-san-juan-blue));
//       background-color: hsl(var(--clr-link-water-white));
//     }
//   }

//   h1 {
//     margin-bottom: 4rem;
//     color: hsl(var(--clr-san-juan-blue));
//   }
// `;

// export default Error;

import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Wrong } from '../assets';

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

const Error = () => {
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
          <h1 className="heading-one-small">
            This link is broken or the page has been removed. Go back to Home.
          </h1>

          <Link to="/">
            <button className="back-button">Home</button>
          </Link>
        </section>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled(motion.section)`
  text-align: center;
  background: hsl(var(--clr-link-water-white));
  max-width: 1440px;
  margin: 0 auto;

  .contact {
    background: url(${Wrong}) -150px 0px no-repeat,
      hsl(var(--clr-link-water-white));
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* max-width: 1440px; */
    /* margin: 0 auto; */

    h1 {
      margin-bottom: 4rem;
    }

    .back-button {
      background-color: hsl(var(--clr-san-juan-blue));
      color: hsl(var(--clr-link-water-white));
      font-family: 'Public Sans';
      font-weight: 700;
      border-radius: 24px;
      height: 3rem;
      width: 10.5rem;
      cursor: pointer;
      border: 1px solid hsl(var(--clr-san-juan-blue));
      outline: none;
      transition: all 0.6s;

      &:hover {
        color: hsl(var(--clr-san-juan-blue));
        background-color: hsl(var(--clr-link-water-white));
      }
    }
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
  }
`;

export default Error;
