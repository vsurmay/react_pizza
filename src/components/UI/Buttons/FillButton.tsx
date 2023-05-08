import styled from "styled-components";

const FillButton = styled.button`
  padding: 11px 29px;
  background: #282828;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.015em;
  color: #ffffff;
  border: 1px solid #282828;
  transition: all 0.4s;

  &:hover {
    background: #ffffff;
    color: #282828;
  }
`;

export default FillButton;
