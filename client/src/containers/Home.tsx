import { Box } from "@chakra-ui/react";
import React from "react";
import Background from "../components/Background";
import URLShortnerForm from "../components/URLShortnerForm";

const Home = () => {
  return (
    <div className="App">
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <URLShortnerForm />
        <Background />
      </Box>
    </div>
  );
};

export default Home;
