import styled from "styled-components";

export const ButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 310px;
`;

export const AuthButton = styled.button`
  margin: 6px;
  padding: 11px;
  border-radius: 30px;
  font-size: 0.8rem;
  border: 0;
  font-weight: 600;
`;

export const OrDivider = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.span`
  background-color: rgb(47, 51, 54);
  height: 1px;
  width: 10px;
  flex-grow: 1;
  margin: 0 0.5rem;
`;

export const CreateAccount = styled(AuthButton)`
  background-color: rgb(29, 155, 240);
  color: white;
`;

export const TermsOfService = styled.p`
  font-size: 0.8rem;
  color: gray;
  margin-top: 0;
`;

export const AlreadyHaveAccount = styled.h3`
  margin-top: 3rem;
`;

export const SignIn = styled(AuthButton)`
  color: rgb(29, 155, 240);
  background-color: inherit;
  border: 0.001px solid rgb(83, 100, 113);
`;
