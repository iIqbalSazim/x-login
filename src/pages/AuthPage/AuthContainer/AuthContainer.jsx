import {
  AuthHeading1,
  AuthHeading2,
  AuthWrapper,
} from "./AuthContainer.styles";
import ButtonGroup from "./ButtonGroup/ButtonGroup";

const AuthContainer = () => {
  return (
    <AuthWrapper>
      <AuthHeading1>Happening Now</AuthHeading1>
      <AuthHeading2>Join today.</AuthHeading2>
      <ButtonGroup />
    </AuthWrapper>
  );
};

export default AuthContainer;
