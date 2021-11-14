import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import { variant, system } from "styled-system";
import { Box } from "../Box/Box";

export const TextBase = styled(Box)`
  ${variant({
    variants: {
      headingOneBlack: {
        fontFamily: "primaryBlack",
        fontSize: [8, 8, 12],  
      },
      headingTwo: {
        fontFamily: "primaryMedium",
      },
      headingThree: {
        fontFamily: "primaryMedium",
      },
      headingFour: {
        fontSize: [5, 10],
      },
      headingFive: {
        fontSize: "1.8rem",
      },
      paraOne: {
        fontFamily: "secondaryRegular",
      },

      paraTwo: {
        fontFamily: "primaryMedium",
        fontSize: [2, 2, 3],
      },
      paraThree: {
        fontFamily: "secondaryLight",
        fontSize: [2, 3, 4],
      },
      button: {
        fontSize: "1.6rem",
        fontFamily: "primaryBlack",
        fontSmoothing: "antialiased",
      },

      // medium heading
      headingTwoMedium: {
        fontFamily: "primaryMedium",
      },
      headingThreeMedium: {
        fontFamily: "primaryMedium",
        fontSize: [8, 8, 10],
      },
      headingFourMedium: {
        fontFamily: "primaryMedium",
        fontSize: [7, 7, 9],
      },
      headingFiveMedium: {
        fontFamily: "primaryMedium",
        fontSize: [6, 6, 8],
      },
      headingSixMedium: {
        fontFamily: "primaryMedium",
        fontSize: [5, 5, 7],
      },
      headingSevenMedium: {
        fontFamily: "primaryMedium",
        fontSize: [4, 4, 6],
      },
      headingEightMedium: {
        fontFamily: "primaryMedium",
        fontSize: [5, 5, 5, 5, 6],
      },
      headingNineMedium: {
        fontFamily: "primaryMedium",
        fontSize: [2, 3, 4],
      },

      // regular heading
      headingTwoRegular: {
        fontFamily: "secondaryRegular",
      },
      headingThreeRegular: {
        fontFamily: "secondaryRegular",
        fontSize: [8, 8, 10],
      },
      headingFourRegular: {
        fontFamily: "secondaryRegular",
        fontSize: [7, 7, 9],
      },
      headingFiveRegular: {
        fontFamily: "secondaryRegular",
        fontSize: [6, 6, 8],
      },
      headingSixRegular: {
        fontFamily: "secondaryRegular",
        fontSize: [5, 5, 7],
      },
      headingSevenRegular: {
        fontFamily: "secondaryRegular",
        fontSize: [4, 4, 6],
      },
      headingEightRegular: {
        fontFamily: "secondaryRegular",
        fontSize: [3, 3, 5],
      },
      headingNineRegular: {
        fontFamily: "secondaryRegular",
        fontSize: [2, 2, 4],
      },

      // medium paragraph
      paraOneMedium: {
        fontFamily: "primaryMedium",
        fontSize: [2, 2, 3],
      },
      paraTwoMedium: {
        fontFamily: "primaryMedium",
        fontSize: [3],
      },
      paraThreeMedium: {
        fontFamily: "primaryBlack",
        fontSize: [3],
      },
      paraFourMedium: {
        fontFamily: "primaryMedium",
        fontSize: [2, 3, 4],
      },

      // regular paragraph
      paraOneRegular: {
        fontFamily: "secondaryRegular",
        letterSpacing: ".8px",
        fontSize: [1, 1, 2],
      },
      paraTwoRegular: {
        fontFamily: "secondaryRegular",
        letterSpacing: ".8px",
        fontSize: [2, 2, 3],
      },
      paraThreeRegular: {
        fontFamily: "secondaryRegular",
        letterSpacing: ".8px",
        fontSize: [3, 3, 4],
      },

      // light paragraph
      paraOneLight: {
        fontFamily: "secondaryLight",
        letterSpacing: ".8px",
        fontSize: [2, 3, 4],
      },
      paraTwoLight: {
        fontFamily: "secondaryLight",
        letterSpacing: ".8px",
        fontSize: [1, 2, 3],
      },
      paraThreeLight: {
        fontFamily: "secondaryLight",
        letterSpacing: ".8px",
        fontSize: [3, 3, 4],
      },
    },
  })}
  ${system({
    lineHeight: {
      property: "lineHeight",
      scale: "lineHeights",
    },
  })}
  ${system({
    fontWeight: {
      property: "fontWeight",
      scale: "fontWeights",
    },
  })}

  ${({ textTransform }) =>
    textTransform &&
    css`
      text-transform: ${textTransform};
    `}

     ${({ textDecoration }) =>
    textDecoration &&
    css`
      text-decoration: ${textDecoration};
    `}
`;

export const Text = forwardRef(({ as, children, ...props }, textRef) => {
  return (
    <TextBase as={as} {...props} ref={textRef}>
      {children || null}
    </TextBase>
  );
});
Text.defaultProps = {
  as: "p",
};

export default Text;
