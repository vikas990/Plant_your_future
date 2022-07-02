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

  @media (max-width: 48rem) {
    position: fixed;
    top: 4rem;
    background: #b3e277;
    left: ${(props) => (props.show ? "0" : "-100%")};
    height: 100vh;
    width: 100%;
    display: block;
    font-size: 1.25rem;
    text-align: center;
    transition: all 0.5s ease;
  }

  & p {
    font-weight: 700;
    cursor: pointer;
    font-family: "Roboto Mono";

    @media (max-width: 48rem) {
      margin: 4rem 0;
      display: block;
    }
  }
`;

export const Hamburger = styled.div`
  margin-top: 1.5rem;
  display: none;
  @media (max-width: 48rem) {
    display: block;
  }
`;
