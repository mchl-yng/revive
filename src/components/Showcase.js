import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

const Showcase = ({ bigText, littleText, image, isTextOnLeft, textColor }) => {
  const slideDirection = isTextOnLeft ? 'right' : 'left';
  const [ref, inView] = useInView({
    triggerOnce: true, 
    rootMargin: `-${Math.floor(window.innerHeight * 0.5)}px 0px`, // Adjust this value to change the trigger point
  });

  return (
    <Flex
      ref={ref}
      justifyContent="space-between"
      alignItems="center"
      flexDirection={isTextOnLeft ? 'row' : 'row-reverse'}
      p={8}
      px='10vw'
      minH='50vh'
      gap = {10}
      opacity={inView ? 1 : 0}
      transform={`translateX(${inView ? 0 : (slideDirection === 'left' ? '-50px' : '50px')})`}
      transition="opacity 0.8s, transform 0.8s"
    >
      <Box flex={1} p={4}>
        <Heading color={textColor} size="4xl" textAlign={isTextOnLeft ? 'left' : 'right'}>
          {bigText}
        </Heading>
        <Text color={textColor} mt={4} fontSize='2xl' textAlign={isTextOnLeft ? 'left' : 'right'}>
          {littleText}
        </Text>
      </Box>
      <Box flex={1} p={4}>
        <Image
          src={image}
          maxH="270px"
        />
      </Box>
    </Flex>
  );
};

export default Showcase;
