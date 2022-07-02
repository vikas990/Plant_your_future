import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: -0.063rem 0.25rem 0.813rem rgba(0 0 0 / 25%);
  padding: 0 5rem;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin-top: 1rem;

  & p {
    font-weight: 700;
    cursor: pointer;
    font-family: "Roboto Mono";
  }
`;
