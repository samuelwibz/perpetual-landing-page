import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="transparent" px={20} py={2} height="80px">
      <Flex alignItems="center" height="100%">
        <Text fontSize="xl" fontWeight="bold" color="white">
          Perpetual 
        </Text>
        <Box flex="1" textAlign="center">
          <Flex justifyContent="center" alignItems="center">
            <Link href="#about-us" color="white" px={2}>
              About Us
            </Link>
            <Link href="#pricing" color="white" px={2}>
              Pricing
            </Link>
            <Link href="#features" color="white" px={2}>
              Features
            </Link>
            <Link href="#demo" color="white" px={2}>
              Demo
            </Link>
            <Link href="#contact" color="white" px={2}>
              Contact
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
