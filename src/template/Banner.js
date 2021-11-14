import React from "react";
import { Box } from "../atoms/Box/Box";
import { Grid } from "../atoms/Grid/Grid";
import { Text } from "../atoms/Text/Text";
import Cards from "../molecules/Cards/Cards";

export const Banner = () => {
  return (
    <>
      <Box background="rgb(230, 247, 245)" p="3.1rem">
        <Grid gridTemplateColumns="1fr 1fr" gridGap="1.5rem">
          <Box>
            <Text
              color="SlateBlue"
              fontSize="2rem"
              fontWeight="bold"
              mb="0.5rem"
              width="fit-content"
              className="fonts"
            >
              Welcome to cymmetri
            </Text>
            <Text
              fontWeight="200"
              color="rgb(105, 145, 127)"
              fontSize="0.8rem"
              className="fonts"
            >
              Follow these steps to get started
            </Text>
            <Box mt="2rem">
              <Cards />
            </Box>
          </Box>
          <Box>
            <Grid
              gridTemplateColumns="1fr"
              height="12rem"
              background="LightGray"
              borderRadius="0.7rem"
              gridGap="1.5rem"
              marginBottom="25px"
            ></Grid>
            <Grid
              gridTemplateColumns="1fr"
              height="25.5rem"
              background="LightGray"
              borderRadius="0.6rem"
              alignItems="center"
              justifyItems="center"
            >
              <Text
                color="rgb(80, 82, 82)"
                fontSize="2rem"
                fontWeight="400"
                className="fonts"
              >
                Videos, blog, documentation
              </Text>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Banner;
