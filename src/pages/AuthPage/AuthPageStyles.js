import styled from "styled-components";

export const StyledAuthPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;

  @media screen and (min-width: 500px) {
    margin: 0 3rem;
  }
`;

export const StyledHeroContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  flex-grow: 1;
  padding-right: 6rem;
  margin-left: 2rem;

  @media screen and (min-width: 900px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    padding: inherit;
    margin: inherit;
  }
`;
