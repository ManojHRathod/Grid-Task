import React from "react";
import { Box, Grid, Text, Image } from "../../../atoms";

const data = [
  {
    title: "Most Sign On",
  },
  {
    title: "Most Failed Logons",
  },
  {
    title: "Critical apps",
  },
];

const ApplicationCenterCards = () => {
  return (
    <>
      {data.map((data) => {
        return (
          <>
            <Box mt="0.5rem">
              <Grid
                background="white"
                mx="0.5rem"
                height="6.3rem"
                borderRadius="0.5rem"
                boxShadow="-0.1px 1px 4.5px rgba(0, 0, 0, 0.25)"
              >
                <Box pl="1.2rem" pt="1rem" pr="0.5rem">
                  <Text className="fonts" color="rgb(56, 56, 128)">
                    {data.title}
                  </Text>
                  <Grid
                    gridTemplateColumns="repeat(5, 1.5fr)"
                    gridGap="1.5rem"
                    mt="0.7rem"
                  >
                    {[0, 1, 2, 3].map(() => {
                      return (
                        <>
                          <Box
                            height="2.5rem"
                            width="2.5rem"
                            bg="white"
                            borderRadius="50%"
                            boxShadow="-0.1px 1px 4.5px rgba(0, 0, 0, 0.25)"
                          >
                            <Box
                              mt="0.5rem"
                              ml="0.4rem"
                              justifyItems="center"
                              alignItems="center"
                              width="1.6rem"
                              height="1.6rem"
                            >
                              <Image
                                src="./Images/amazon-brands.svg"
                                width="100%"
                                height="100%"
                              ></Image>
                              {/* <i class="fab fa-amazon fa-lg"></i> */}
                            </Box>
                          </Box>
                        </>
                      );
                    })}
                  </Grid>
                </Box>
              </Grid>
            </Box>
          </>
        );
      })}
    </>
  );
};

export default ApplicationCenterCards;
