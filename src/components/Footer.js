import React from 'react';
import { Box, Flex, Link, Text, Stack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" py={10} backgroundColor="#f0f0f0">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        mx="auto"
        px={4}
      >
        <Stack direction="column" spacing={4}>
          <Text fontSize="lg" fontWeight="bold">About</Text>
          <Link href="#">Users Info</Link>
          <Link href="#">Demo</Link>
        </Stack>
        <Stack direction="column" spacing={4} mt={{ base: 4, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">Social</Text>
          <Link href="#">LinkedIn</Link>
          <Link href="#">Other Social</Link>
          <Link href="#">Other Social</Link>
        </Stack>
      </Flex>
      <Flex
        mt={8}
        justifyContent="space-between"
        alignItems="center"
        borderTop="1px solid #ddd"
        pt={4}
        px={4}
      >
        <Stack direction="row" spacing={4}>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Privacy Policy</Link>
        </Stack>
        <Text>2024 Perpetual</Text>
      </Flex>
    </Box>
  );
};

export default Footer;