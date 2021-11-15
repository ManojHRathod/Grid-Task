import React from "react";

import styled, { css } from "styled-components";
import { layout, space, position } from "styled-system";

export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  ${layout}
  ${space}
  ${position}
  ${({ objectfit }) =>
    objectfit &&
    css`
      object-fit: ${objectfit};
    `}
  ${({ cursor }) =>
    cursor &&
    css`
      cursor: ${cursor};
    `}
`;

export const Image = ({ src, alt, imageProps, cursor, objectfit, ...rest }) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      objectfit={objectfit}
      imageProps={imageProps}
      cursor={cursor}
      {...rest}
    />
  );
};
