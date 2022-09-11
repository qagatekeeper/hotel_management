import styled from "styled-components";

export const Label = styled.label`
  font-size: 0.8rem !important;
  font-weight: bold;
  line-height: 1.1rem;
  letter-spacing: 2px;
`;

export const Select = styled.select`
  height: 37px;
  width: 100%;
  padding: 6px 12px;
  letter-spacing: 1px;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.8);
  font-size: 1rem;
  font-family: "Lato", sans-serif;
  font-weight: normal;
  border-radius: 5px;
  transition: border 0.5s;

  &:focus {
    border: 1px solid var(--color-link-blue);
  }
`;
