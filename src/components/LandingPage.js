import React, { useState, useRef} from "react";
import { VStack, Box, Button } from "@chakra-ui/react";

import "./LandingPage.css";

const LandingPage = () => {
  const [activeButton, setActiveButton] = useState(null);
  const buttonRefs = useRef(new Array(7).fill(null));
  const containerRef = useRef(null);

  const handleMouseEnter = (index) => {
    setActiveButton(index);
  };

  const handleMouseLeave = () => {
    setActiveButton(null);
  };

  return (
    <Box className="landing-page-buttons-container">
      <div className="landing-page-buttons-tracker">
        {buttonRefs.current.map((_, index) => (
          <div key={index} className={`track-segment ${activeButton === index ? "active" : ""}`}></div>
        ))}
      </div>
      <div className="landing-page-buttons" ref={containerRef}>
        <VStack spacing={4} align="stretch">
          <Box
            ref={(el) => (buttonRefs.current[0] = el)}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <Button width="200px" color="teal" borderColor="teal" borderWidth="2px" bg="transparent" _hover={{ bg: "teal", color: "white" }}>
              Mission
            </Button>
          </Box>
          <Box
            ref={(el) => (buttonRefs.current[1] = el)}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <Button width="200px" color="teal" borderColor="teal" borderWidth="2px" bg="transparent" _hover={{ bg: "teal", color: "white" }}>
              CTA
            </Button>
          </Box>
          <Box
            ref={(el) => (buttonRefs.current[2] = el)}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <Button width="200px" color="teal" borderColor="teal" borderWidth="2px" bg="transparent" _hover={{ bg: "teal", color: "white" }}>
              Product Demo
            </Button>
          </Box>
          <Box
            ref={(el) => (buttonRefs.current[3] = el)}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <Button width="200px" color="teal" borderColor="teal" borderWidth="2px" bg="transparent" _hover={{ bg: "teal", color: "white" }}>
              Service Summary
            </Button>
          </Box>
          <Box
            ref={(el) => (buttonRefs.current[4] = el)}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <Button width="200px" color="teal" borderColor="teal" borderWidth="2px" bg="transparent" _hover={{ bg: "teal", color: "white" }}>
              For Students
            </Button>
          </Box>
          <Box
            ref={(el) => (buttonRefs.current[5] = el)}
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
            <Button width="200px" color="teal" borderColor="teal" borderWidth="2px" bg="transparent" _hover={{ bg: "teal", color: "white" }}>
              For Teachers
            </Button>
          </Box>
          <Box
            ref={(el) => (buttonRefs.current[6] = el)}
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}
          >
            <Button width="200px" color="#00007a" borderColor="#00007a" borderWidth="2px" bg="transparent" _hover={{ bg: "#000041", color: "white" }}>
              Updates
            </Button>
          </Box>
        </VStack>
      </div>
    </Box>
  );
};

export default LandingPage;
