import styled from "styled-components";

export const StyledButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;

  @media screen and (min-width: 500px) {
    width: 19rem;
  }
`;

export const StyledAuthButton = styled.button`
  margin: 0.375rem;
  border-radius: 1.875rem;
  border: 0;
  font-weight: 600;
  font-size: 0.99rem;
  padding: 0.625rem;

  @media screen and (min-width: 500px) {
    padding: 0.688rem;
    font-size: 0.8rem;
  }
`;

export const StyledOrDivider = styled.div`
  margin: 0.625rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLine = styled.span`
  background-color: rgb(47, 51, 54);
  height: 0.063rem;
  width: 0.625rem;
  flex-grow: 1;
  margin: 0 0.5rem;
`;

export const StyledCreateAccount = styled(StyledAuthButton)`
  background-color: rgb(29, 155, 240);
  color: white;
`;

export const StyledTermsOfService = styled.p`
  color: gray;
  margin-top: 0;
  font-size: 0.7rem;

  @media screen and (min-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const StyledAlreadyHaveAccount = styled.h3`
  margin-top: 2rem;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 500px) {
    font-size: large;
  }

  @media screen and (min-width: 500px) {
    margin-top: 3rem;
  }
`;

export const StyledSignIn = styled(StyledAuthButton)`
  color: rgb(29, 155, 240);
  background-color: inherit;
  border: 0.001rem solid rgb(83, 100, 113);
  padding: 0.563rem;

  @media screen and (max-width: 500px) {
    font-size: 0.95rem;
  }

  @media screen and (min-width: 500px) {
    font-size: inherit;
    padding: 0.688rem;
  }
`;
