import styled from "styled-components";

export const StyledHeader = styled.header`
  /* background-color: ${({ bg }) => bg}; */
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;

  h1 {
    color: black;
  }

  /* &:hover {
    background-color: black;
    cursor: pointer;

    h1 {
      color: red;
    }
  } */
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Logo = styled.img``;
