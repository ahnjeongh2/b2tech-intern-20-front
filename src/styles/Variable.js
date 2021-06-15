import { css } from 'styled-components';

export const flexSet = (justify = 'center', align = 'center') => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

export const BtnSet = () => css`
  height: 60px;
  margin: 10px;
  padding: 0px 20px;
  background: linear-gradient(315deg, #cfdae0, #f6ffff);
  font-size: 0.9rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  letter-spacing: 2.5px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
`;
