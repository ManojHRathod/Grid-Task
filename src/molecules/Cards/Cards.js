import { Box } from "../../atoms/Box/Box";
import { Grid } from "../../atoms/Grid/Grid";
import { Flex } from "../../atoms/Flex/Flex";
import Text from "../../atoms/Text/Text";
import Link from "../../atoms/Link/Link";

const data = [
  {
    number: "1",
    heading: "Administration",
    subHeading: "define default system atrributes to start importing data",
  },
  {
    number: "2",
    heading: "System Masters",
    subHeading: "define default system atrributes to start importing data",
  },
  {
    number: "3",
    heading: "Identity Provider",
    subHeading: "define default system atrributes to start importing data",
  },
  {
    number: "4",
    heading: "Application",
    subHeading: "Add Application to manage SSO and other features",
  },
  {
    number: "5",
    heading: "Users",
    subHeading: "add users to your system to get started",
  },
];

const Cards = () => {
  return (
    <>
      <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="1.5rem">
        {data.map((data) => {
          return (
            <>
              <Box
                width="13.8rem"
                height="13rem"
                background="white"
                borderRadius="0.5rem"
                boxShadow="-0.1px 1px 4.5px rgba(0, 0, 0, 0.25)"
                px="1.5rem"
                pt="1.5rem"
              >
                <Flex
                  flexDirection="column"
                  alignItems="flexStart"
                  height="7rem"
                >
                  <Grid
                    width="1.7rem"
                    height="1.7rem"
                    borderRadius="0.6rem"
                    background="rgb(56, 56, 128)"
                    justifyContent="center" /* horizontally*/
                    alignItems="center" /* vertically*/
                    mb="1rem"
                  >
                    <Text fontSize="1rem" fontWeight="400" color="white"  className="fonts">
                      {data.number}
                    </Text>
                  </Grid>
                  <Text
                    fontSize="1rem"
                    fontWeight="500"
                    color="rgb(56, 56, 128)"
                    mb="0.3rem"
                    className="fonts"
                  >
                    {data.heading}
                  </Text>
                  <Text
                    lineHeight="1rem"
                    fontSize="0.7rem"
                    color="rgb(105, 145, 127)"
                    className="fonts"
                  >
                    {data.subHeading}
                  </Text>
                </Flex>

                <Text color="blue" my="1rem" className="fonts">
                  <Link>Add</Link>
                </Text>
              </Box>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default Cards;
