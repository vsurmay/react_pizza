import styled from "styled-components";
import variables from "../../../scss/_variables.scss";

const OutLibeBtn = styled.button`
  font-weight: 700;
  padding: 12px 25px;
  background: #ffffff;
  border: 1px solid ${variables.mainDecorColor};
  color: ${variables.mainDecorColor};
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 7px;
  transition: all 0.4s;

  svg {
    path {
      transition: all 0.4s;
      fill: ${variables.mainDecorColor};
    }
  }

  &:hover {
    background: ${variables.mainDecorColor};
    color: #ffffff;

    svg {
      path {
        fill: #ffffff;
      }
    }
  }

  @media (max-width: 780px) {
    padding: 8px 16px;
  }
`;

export default OutLibeBtn;
