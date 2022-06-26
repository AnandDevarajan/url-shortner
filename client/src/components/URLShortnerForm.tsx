import React, { useState } from "react";
import axios from "axios";
import { Input, Button, Box, Heading, InputGroup } from "@chakra-ui/react";
import { SERVER_ENDPOINTS } from "../config/config";

const URLShortnerForm = () => {
  const [destination, setDestination] = useState();
  const [shortUrl, setShortUrl] = useState<{ shortId: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await axios
      .post(`${SERVER_ENDPOINTS}/`, { destination })
      .then((response) => response.data);

    setShortUrl(result);
  };

  return (
    <Box pos="relative" zIndex="2" backgroundColor="white" padding="6">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            onChange={(e: any) => setDestination(e.target.value)}
            placeholder="https://www.expample.com"
          />

          <Button type="submit">CREATE</Button>
        </InputGroup>
      </form>

      {shortUrl && (
        <a href={`${SERVER_ENDPOINTS}/${shortUrl?.shortId}`}>CLICK ME</a>
      )}
    </Box>
  );
};

export default URLShortnerForm;
