import {
  StyledAuthHeading1,
  StyledAuthHeading2,
  StyledAuthWrapper,
} from "./AuthContainerStyles";
import ButtonGroup from "./ButtonGroup/ButtonGroup";

const AuthContainer = () => {
  return (
    <StyledAuthWrapper>
      <StyledAuthHeading1>Happening Now</StyledAuthHeading1>
      <StyledAuthHeading2>Join today.</StyledAuthHeading2>
      <ButtonGroup />
    </StyledAuthWrapper>
  );
};

export default AuthContainer;
