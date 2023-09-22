import styled from "styled-components";

export const StyledLogoWrapper = styled.div`
  width: 3.125rem;
  margin: 2.5rem 0 0 0;
  padding: 0;

  @media screen and (min-width: 900px) {
    margin: 2rem 0;
    width: 40%;
    max-width: 25rem;
    padding: inherit;
  }
`;

export const StyledLogoImage = styled.img`
  width: 100%;
`;
