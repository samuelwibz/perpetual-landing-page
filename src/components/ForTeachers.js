import React from "react";
import { Box, Text, List, ListItem, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./ForTeachers.css";

const ForTeachers = () => {
  return (
    <Box className="for-teachers" color="white">
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Teachers
        </Text>
        <FontAwesomeIcon icon={faChevronRight} color="white" />
      </Flex>
      <Box className="content">
        <Text fontSize="lg" mb={4}>
          Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut. Maecenas eget condimentum velit, sit amet feugiat lectus.
        </Text>
      </Box>
      <List spacing={3}>
        <ListItem>Benefits 1</ListItem>
        <ListItem>Benefits 2</ListItem>
        <ListItem>Benefits 3</ListItem>
        <ListItem>Benefits 4</ListItem>
      </List>
    </Box>
  );
};

export default ForTeachers;
