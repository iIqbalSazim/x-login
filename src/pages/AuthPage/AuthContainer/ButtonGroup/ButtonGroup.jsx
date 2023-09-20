import {
  AlreadyHaveAccount,
  AuthButton,
  ButtonGroupContainer,
  CreateAccount,
  Line,
  OrDivider,
  SignIn,
  TermsOfService,
} from "./ButtonGroup.styles";

const ButtonGroup = () => {
  return (
    <ButtonGroupContainer>
      <AuthButton>Sign up with Google</AuthButton>
      <AuthButton>Sign up with Apple</AuthButton>
      <OrDivider>
        <Line />
        or
        <Line />
      </OrDivider>
      <CreateAccount>Create account</CreateAccount>
      <TermsOfService>
        By signing up, you agree to the Terms of Service and Privacy Policy,
        including Cookie Use.
      </TermsOfService>
      <AlreadyHaveAccount>Already have an account?</AlreadyHaveAccount>
      <SignIn>Sign in</SignIn>
    </ButtonGroupContainer>
  );
};

export default ButtonGroup;
