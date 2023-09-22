import styled from "styled-components";

export const StyledAuthWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const StyledAuthHeading1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 500px) {
    font-size: 5rem;
  }
`;

export const StyledAuthHeading2 = styled.h2`
  font-size: 1.7rem;

  @media screen and (min-width: 500px) {
    font-size: 2rem;
  }
`;
