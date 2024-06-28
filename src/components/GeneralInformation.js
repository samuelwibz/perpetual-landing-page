import React from "react";
import { Box, Text, Stack, Card, CardBody, Image, Heading } from "@chakra-ui/react";
import "./GeneralInformation.css";

const GeneralInformation = () => {
  return (
    <Box className="general-information">
      <Box className="header">
        <Text fontSize="sm" color="gray.500" mb={4}>
          [What we offer]
        </Text>
        <Text fontSize="3xl" fontWeight="bold" lineHeight="shorter">
          <Text as="span" className="number-circle">
            1
          </Text>
          Research from the most reputable sources
          <Text as="span" className="number-circle">
            2
          </Text>
          with over 500 partnerships
          <Text as="span" className="number-circle">
            3
          </Text>
          to create the ultimate future-proof learning platform customised to you.
        </Text>
      </Box>

      <Stack direction={["column", "row"]} spacing={8} mt={20} justifyContent="center" alignItems="center">
        <Card maxW="sm">
          <CardBody>
            <Image src="https://via.placeholder.com/150" alt="Placeholder image" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">Porem ipsum dolor sit amet</Heading>
              <Text>
                Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut. Maecenas eget condimentum velit, sit amet feugiat
                lectus. Class aptent taciti sociosqu ad litora torquent per.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image src="https://via.placeholder.com/150" alt="Placeholder image" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">Porem ipsum dolor sit amet</Heading>
              <Text>
                Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut. Maecenas eget condimentum velit, sit amet feugiat
                lectus. Class aptent taciti sociosqu ad litora torquent per.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image src="https://via.placeholder.com/150" alt="Placeholder image" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">Porem ipsum dolor sit amet</Heading>
              <Text>
                Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut. Maecenas eget condimentum velit, sit amet feugiat
                lectus. Class aptent taciti sociosqu ad litora torquent per.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
      <Stack direction={["column", "row"]} spacing={8} mt={20} justifyContent="center" alignItems="center">
        <Card maxW="sm">
          <CardBody>
            <Image src="https://via.placeholder.com/150" alt="Placeholder image" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">Porem ipsum dolor sit amet</Heading>
              <Text>
                Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut. Maecenas eget condimentum velit, sit amet feugiat
                lectus. Class aptent taciti sociosqu ad litora torquent per.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image src="https://via.placeholder.com/150" alt="Placeholder image" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">Porem ipsum dolor sit amet</Heading>
              <Text>
                Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut. Maecenas eget condimentum velit, sit amet feugiat
                lectus. Class aptent taciti sociosqu ad litora torquent per.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image src="https://via.placeholder.com/150" alt="Placeholder image" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">Porem ipsum dolor sit amet</Heading>
              <Text>
                Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut. Maecenas eget condimentum velit, sit amet feugiat
                lectus. Class aptent taciti sociosqu ad litora torquent per.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        
      </Stack>
    </Box>
  );
};

export default GeneralInformation;
