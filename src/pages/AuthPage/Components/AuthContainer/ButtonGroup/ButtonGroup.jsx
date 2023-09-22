import {
  StyledAlreadyHaveAccount,
  StyledAuthButton,
  StyledButtonGroupContainer,
  StyledCreateAccount,
  StyledLine,
  StyledOrDivider,
  StyledSignIn,
  StyledTermsOfService,
} from "./ButtonGroupStyles";

const ButtonGroup = () => {
  return (
    <StyledButtonGroupContainer>
      <StyledAuthButton>Sign up with Google</StyledAuthButton>
      <StyledAuthButton>Sign up with Apple</StyledAuthButton>
      <StyledOrDivider>
        <StyledLine />
        or
        <StyledLine />
      </StyledOrDivider>
      <StyledCreateAccount>Create account</StyledCreateAccount>
      <StyledTermsOfService>
        By signing up, you agree to the Terms of Service and Privacy Policy,
        including Cookie Use.
      </StyledTermsOfService>
      <StyledAlreadyHaveAccount>
        Already have an account?
      </StyledAlreadyHaveAccount>
      <StyledSignIn>Sign in</StyledSignIn>
    </StyledButtonGroupContainer>
  );
};

export default ButtonGroup;
