import React from "react";
import { Box, Input, InputGroup, InputRightElement, Button, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Waitlist = () => {
  return (
    <Box mt={4} textAlign="center">
      <HStack spacing={4} justify="center" width="500px" mx="auto">
        <InputGroup size="lg">
          <Input
            type="email"
            placeholder="Enter your email"
            bg="transparent"
            borderColor="white"
            color="white"
            _placeholder={{ color: "white" }}
            borderRadius="full"
            focusBorderColor="blue.400"
          />
          <InputRightElement width="4.5rem">
            <FontAwesomeIcon icon={faEnvelope} color="white"/>
          </InputRightElement>
        </InputGroup>
        <Button size="lg" width="200px" colorScheme="blue" borderRadius="full">
          Call To Action
        </Button>
      </HStack>
    </Box>
  );
};

export default Waitlist;
