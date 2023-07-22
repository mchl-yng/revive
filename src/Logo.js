import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@chakra-ui/react';
import logo from './logo.svg';

export const Logo = (props) => {
  const animationVariants = {
    up: {
      y: -30,
      transition: {
        duration: 2,
        yoyo: Infinity,
        ease: 'easeInOut',
      },
    },
    down: {
      y: 30,
      transition: {
        duration: 2,
        yoyo: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div animate="up" variants={animationVariants}>
      <Image src={logo} boxSize="400px" />
    </motion.div>
  );
};
