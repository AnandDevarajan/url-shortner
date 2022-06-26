import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spinner, Box } from "@chakra-ui/react";
import { SERVER_ENDPOINTS } from "../config/config";

const HandleRedirect = () => {
  const params = useParams();
  const [destination, setDestination] = useState<null | string>(null);
  const [error, setError] = useState();

  useEffect(() => {
    const getData = async () => {
      return await axios
        .get(`${SERVER_ENDPOINTS}/${params.id}`)
        .then((res) => setDestination(res.data.destination))
        .catch((error) => {
          setError(error.message);
        });
    };
    getData();
  }, [params.id]);

  useEffect(() => {
    if (destination) {
      window.location.replace(destination);
    }
  }, [destination]);

  if (!destination && !error) {
    return (
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner />
      </Box>
    );
  }

  return <p>{error && JSON.stringify(error)}</p>;
};

export default HandleRedirect;
