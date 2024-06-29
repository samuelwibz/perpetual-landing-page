import React, { useState } from "react";
import { Box, Button, Flex, Link, Text, Stack } from "@chakra-ui/react";
import EnquiryForm from "./EnquiryForm";
import "./Footer.css";

const Footer = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const handleEnquiryButtonClick = () => {
    setShowEnquiryForm(true);
  };

  const handleCloseForm = () => {
    setShowEnquiryForm(false);
  };

  return (
    <div className="footer-content">
      <div className="footer-title">
        <Text fontSize="100px" borderBottom="1px solid #ddd">
          Get in touch
        </Text>
      </div>
      <div className="enquiry-container">
        {showEnquiryForm ? (
          <EnquiryForm onClose={handleCloseForm} />
        ) : (
          <Box>
            <Text fontSize="lg" mb={10} width={450}>
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </Text>
            <Button size="lg" borderRadius="full" backgroundColor="black" color="white" onClick={handleEnquiryButtonClick}>
              Enquire now
            </Button>
          </Box>
        )}
      </div>
      <div className="footer-links-col-1">
        <Stack direction="column" spacing={4}>
          <Link href="#">About</Link>
          <Link href="#">Users Info</Link>
          <Link href="#">Demo</Link>
        </Stack>
      </div>
      <div className="footer-links-col-2">
        <Stack direction="column" spacing={4}>
          <Link href="#">LinkedIn</Link>
          <Link href="#">Other Social</Link>
          <Link href="#">Other Social</Link>
        </Stack>
      </div>
      <div className="footer-copyright-container">
        <Flex mt={8} justifyContent="space-between" alignItems="flex-end" borderTop="1px solid #ddd" pt={4} px={4}>
          <Text width={450}>
            Perpetual acknowledges the Traditional Custodians of the land where we work and live. We pay respects to Elders past, present and
            emerging.
          </Text>
          <Stack direction="row" spacing={4}>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Privacy Policy</Link>
          </Stack>
          <Text>2024 Perpetual</Text>
        </Flex>
      </div>
    </div>
  );
};

export default Footer;
