import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: rgb(113, 118, 123);
  margin: 0.7rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 0.313rem;
  font-size: 0.813rem;

  @media screen and (min-width: 500px) {
    font-size: 0.875rem;
  }
`;

export const StyledFooterItem = styled.div`
  border: #000 solid 0.063rem;
  margin: 0 0.4rem;
  text-align: center;
`;
