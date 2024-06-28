import React from 'react';
import { Box, Card, CardBody, Stack, Heading, Text, Button } from '@chakra-ui/react';

const LatestUpdates = () => {
  return (
    <Box p={10} textAlign="center">
      <Heading mb={20}>Latest Updates</Heading>
      <Stack direction={["column", "row"]} spacing={8} justifyContent="center" alignItems="center" flexWrap="wrap">
        <Card maxW="sm" mb={8}>
          <CardBody>
            <Stack spacing="3" textAlign="left">
              <Heading size="md">Article Title 1</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero nec lacus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut.
              </Text>
              <Button size="sm" variant="link" alignSelf="flex-end">
                Read more
              </Button>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" mb={8}>
          <CardBody>
            <Stack spacing="3" textAlign="left">
              <Heading size="md">Article Title 2</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero nec lacus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut.
              </Text>
              <Button size="sm" variant="link" alignSelf="flex-end">
                Read more
              </Button>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" mb={8}>
          <CardBody>
            <Stack spacing="3" textAlign="left">
              <Heading size="md">Article Title 3</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero nec lacus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut.
              </Text>
              <Button size="sm" variant="link" alignSelf="flex-end">
                Read more
              </Button>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" mb={8}>
          <CardBody>
            <Stack spacing="3" textAlign="left">
              <Heading size="md">Article Title 4</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero nec lacus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut.
              </Text>
              <Button size="sm" variant="link" alignSelf="flex-end">
                Read more
              </Button>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" mb={8}>
          <CardBody>
            <Stack spacing="3" textAlign="left">
              <Heading size="md">Article Title 5</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero nec lacus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut.
              </Text>
              <Button size="sm" variant="link" alignSelf="flex-end">
                Read more
              </Button>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" mb={8}>
          <CardBody>
            <Stack spacing="3" textAlign="left">
              <Heading size="md">Article Title 6</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero nec lacus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut.
              </Text>
              <Button size="sm" variant="link" alignSelf="flex-end">
                Read more
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  );
};

export default LatestUpdates;
