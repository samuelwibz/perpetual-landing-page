import React from "react";
import { Box, Flex, Text, Input, Button, Radio, RadioGroup, Stack, Select, FormControl, FormLabel, CloseButton } from "@chakra-ui/react";

const EnquiryForm = ({ onClose }) => {
  return (
    <Box bg="white" p={10} borderRadius="md" minW="400px" maxW="600px" mx="auto" boxShadow="lg">
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Text fontSize="2xl" fontWeight="bold">
          Tell us about yourself and how we can help you.
        </Text>
        <CloseButton size="lg" onClick={onClose} />
      </Flex>

      <FormControl id="name" mb={10}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          bg="transparent"
          borderColor="gray.500"
          borderRadius="md"
          placeholder="Name*"
          _focus={{ boxShadow: "none", borderColor: "gray.700" }}
        />
      </FormControl>

      <FormControl id="email" mb={10}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          borderRadius="md"
          bg="transparent"
          borderColor="gray.500"
          placeholder="Email*"
          _focus={{ boxShadow: "none", borderColor: "gray.700" }}
        />
      </FormControl>

      <FormControl id="enquiry-type" mb={10}>
        <FormLabel>Enquiry type</FormLabel>
        <Select
          placeholder="Select your enquiry type"
          borderColor="gray.500"
          borderRadius="md"
          _focus={{ boxShadow: "none", borderColor: "gray.700" }}
        >
          <option>General</option>
          <option>Support</option>
          <option>Sales</option>
        </Select>
      </FormControl>

      <Text mb={4}>I am a:</Text>
      <RadioGroup defaultValue="student" mb={4}>
        <Stack direction="row" spacing={4}>
          <Radio value="student" borderColor="gray.500">
            Student
          </Radio>
          <Radio value="educator" borderColor="gray.500">
            Educator
          </Radio>
        </Stack>
      </RadioGroup>

      <Button colorScheme="black" bg="black" color="white" size="lg" borderRadius="full" mt={4}>
        Submit
      </Button>

      <Text mt={6} fontSize="sm" color="gray.700">
        *Required fields. By submitting this form you are agreeing to our Terms of Service and Privacy Policies.
      </Text>
    </Box>
  );
};

export default EnquiryForm;
