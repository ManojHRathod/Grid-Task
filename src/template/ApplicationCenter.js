import React from "react";
import { Box, Grid, Text, Image } from "../atoms";
import ApplicationCenterCards from "../molecules/Cards/ApplicationCenterCards/ApplicationCenterCards";

const ApplicationCenter = () => {
  return (
    <>
      <Box background="rgb(232, 247, 245)" py="3em">
        <Box
          ml="39%"
          width="21.5rem"
          height="37.5rem"
          background="white"
          borderRadius="0.5rem"
        >
          <Box py="1.5rem">
            <Grid gridTemplateColumns=" 0.5fr 5fr" gridGap="0.7rem">
              <Box width="1.2rem" height="1.2rem" ml="0.9rem" mt="0.1rem">
                <Image
                  src="./Images/menu.svg"
                  width="100%"
                  height="100%"
                ></Image>
                {/* <i class="fas fa-align-justify "></i> */}
              </Box>
              <Text
                fontSize="1.2rem"
                color="rgb(56, 56, 128)"
                className="fonts"
              >
                Application Center
              </Text>
            </Grid>
          </Box>
          <Box width="100%" height="1px" bg="rgb(64, 64, 110)"></Box>
          <Box mt="1rem">
            <ApplicationCenterCards></ApplicationCenterCards>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ApplicationCenter;
