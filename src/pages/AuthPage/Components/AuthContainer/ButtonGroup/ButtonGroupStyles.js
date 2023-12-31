import styled from "styled-components";

export const StyledButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
`;

export const StyledAuthButton = styled.button`
  margin: 0.375rem;
  padding: 0.688rem;
  border-radius: 1.875rem;
  font-size: 0.8rem;
  border: 0;
  font-weight: 600;
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
  font-size: 0.8rem;
  color: gray;
  margin-top: 0;
`;

export const StyledAlreadyHaveAccount = styled.h3`
  margin-top: 3rem;
`;

export const StyledSignIn = styled(StyledAuthButton)`
  color: rgb(29, 155, 240);
  background-color: inherit;
  border: 0.001rem solid rgb(83, 100, 113);
`;
