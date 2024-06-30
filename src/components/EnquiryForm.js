import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Select,
  FormControl,
  FormLabel,
  CloseButton,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const EnquiryForm = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Formik
      initialValues={{ name: "", email: "", enquiryType: "", role: "student", enquiry: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Your name is required"),
        email: Yup.string().email("Invalid email address").required("Your email is required"),
        enquiryType: Yup.string().required("You need to specify your enquiry type"),
        role: Yup.string().required("Required"),
        enquiry: Yup.string().required("This cannot be blank"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          setIsSubmitted(true);
        }, 400);
      }}
    >
      {({ isSubmitting, errors, touched, setFieldTouched }) => (
        <Box bg="white" p={10} borderRadius="md" minH="600px" minW="400px" maxW="600px" mx="auto" my="auto" boxShadow="lg">
          <Flex justifyContent="space-between" alignItems="flex-start" mb={6}>
            {!isSubmitted ? (
              <Text fontSize="2xl" fontWeight="bold">
                Tell us about yourself and how we can help you.
              </Text>
            ) : (
              <Text></Text>
            )}
            <CloseButton size="lg" onClick={onClose} />
          </Flex>

          {isSubmitted ? (
            <Flex alignItems="center" justifyContent="center" height="350px">
              <Box>
                <Box textAlign="center" mt={10} mb={10}>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: "100px", color: "green" }} />
                </Box>
                <Text fontSize="3xl" fontWeight="bold" mb={5} color="green.500" textAlign="center">
                  Thank you for your message!
                </Text>
                <Text fontSize="xl" color="green.500" textAlign="justify">
                  Our team will get back to you as soon as possible.
                </Text>
              </Box>
            </Flex>
          ) : (
            <Form>
              <FormControl id="name" mb={10} isInvalid={errors.name && touched.name}>
                <FormLabel>Name</FormLabel>
                <Field
                  name="name"
                  as={Input}
                  bg="transparent"
                  borderColor="gray.500"
                  borderRadius="md"
                  _focus={{ boxShadow: "none", borderColor: "gray.700" }}
                />
                <ErrorMessage name="name" component={FormErrorMessage} isInvalid />
              </FormControl>
              <FormControl id="email" mb={10} isInvalid={errors.email && touched.email}>
                <FormLabel>Email</FormLabel>
                <Field
                  name="email"
                  as={Input}
                  type="email"
                  borderRadius="md"
                  bg="transparent"
                  borderColor="gray.500"
                  placeholder="Email*"
                  _focus={{ boxShadow: "none", borderColor: "gray.700" }}
                />
                <ErrorMessage name="email" component={FormErrorMessage} />
              </FormControl>

              <FormControl id="enquiryType" mb={10} isInvalid={errors.enquiryType && touched.enquiryType}>
                <FormLabel>Enquiry type</FormLabel>
                <Field
                  name="enquiryType"
                  as={Select}
                  placeholder="Select your enquiry type"
                  borderColor="gray.500"
                  borderRadius="md"
                  _focus={{ boxShadow: "none", borderColor: "gray.700" }}
                >
                  <option value="general">General</option>
                  <option value="support">Support</option>
                  <option value="sales">Sales</option>
                </Field>
                <ErrorMessage name="enquiryType" component={FormErrorMessage} />
              </FormControl>

              <Text mb={4}>I am a:</Text>
              <FormControl isInvalid={errors.role && touched.role}>
                <RadioGroup defaultValue="student" mb={10}>
                  <Stack direction="row" spacing={4}>
                    <Field name="role" type="radio" value="student" as={Radio} borderColor="gray.500">
                      Student
                    </Field>
                    <Field name="role" type="radio" value="educator" as={Radio} borderColor="gray.500">
                      Educator
                    </Field>
                  </Stack>
                </RadioGroup>
                <ErrorMessage name="role" component={FormErrorMessage} />
              </FormControl>

              <FormControl mt={4} isInvalid={errors.enquiry && touched.enquiry}>
                <FormLabel htmlFor="enquiry">What can we help you with?</FormLabel>
                <Field name="enquiry" as={Textarea} />
                <ErrorMessage name="enquiry" component={FormErrorMessage} />
              </FormControl>

              <Button
                backgroundColor="black"
                color="white"
                size="lg"
                borderRadius="full"
                mt={4}
                type="submit"
                isLoading={isSubmitting}
                onClick={() => {
                  Object.keys(errors).forEach((field) => {
                    setFieldTouched(field, true, true);
                  });
                }}
              >
                Submit
              </Button>

              <Text mt={6} fontSize="sm" color="gray.700">
                *Required fields. By submitting this form you are agreeing to our Terms of Service and Privacy Policies.
              </Text>
            </Form>
          )}
        </Box>
      )}
    </Formik>
  );
};

export default EnquiryForm;
